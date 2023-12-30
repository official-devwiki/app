import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Typography } from "@components/common/Typography";
import { QuizIcon } from "@components/common/icons/QuizIcon";
import * as S from "./style";
import { EmptyBlock } from "@components/ui/block/EmptyBlock";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import { useTodayQuizzesQuery } from "@services/queries/quizzesQuery";
import { Button } from "@components/common/Button";
import toast from "@components/common/toast/ToastHandler";
import { Input } from "@components/common/input/Input";
import { CheckCircleIcon } from "@components/common/icons/CheckCircleIcon";
import { HintBlock } from "@components/ui/block/HintBlock";
import { useRouter } from "next/router";
import { Block, Chance } from "@interfaces/quizzes";
import { useQuizAnswerSubmitMutate } from "@services/mutations/quizzesMutation";

const initialStepState: Chance[] = [
  { step: 1, answer: false, hint: [] },
  { step: 2, answer: false, hint: [] },
  { step: 3, answer: false, hint: [] },
  { step: 4, answer: false, hint: [] },
  { step: 5, answer: false, hint: [] },
];

export const QuizForm = ({ userId }: { userId: string }): ReactElement => {
  const [checkBox, setCheckBox] = useState<Chance[]>(initialStepState);
  const [answer, setAnswer] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageStyling, setMessageStyling] = useState<string>("default");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const { data, isLoading } = useTodayQuizzesQuery();
  const answerSubmitMutate = useQuizAnswerSubmitMutate();

  const emptyBlockElementGenerator = (): ReactElement[] => {
    const block = [];
    if (data) {
      for (let i = 0; i < data.answerLength; i++) {
        block.push(<EmptyBlock key={`empty-box-${i}`} />);
      }
    }
    return block;
  };

  const inputValidation = (): boolean => {
    if (answer.length <= 0) {
      toast.message("정답을 입력해 주세요.", "error");
      if (inputRef.current !== null) inputRef.current.focus();
      return false;
    } else if (answer.length < data.answerLength) {
      toast.message("글자 수를 확인해 주세요.", "error");
      if (inputRef.current !== null) inputRef.current.focus();
      return false;
    }
    if (currentStep > 5) {
      toast.message("더 이상 정답을 제출할 수 없습니다.", "error");
      return false;
    }
    return true;
  };

  const todayQuizAnswerSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!inputValidation()) return;

    const sendData: { userId: string; count: number; answer: string } = {
      count: currentStep,
      answer,
      userId,
    };
    // 정답 제출
    answerSubmitMutate.mutate(sendData);
  };

  useEffect(() => {
    if (answerSubmitMutate.isSuccess) {
      console.log(answerSubmitMutate.data);
      if (!answerSubmitMutate.data.result) {
        checkBoxUpdate(answerSubmitMutate.data.hint);
      } else {
        toast.message("정답~!", "success");
      }

      setAnswer("");
      setCurrentStep(currentStep + 1);
    }
  }, [answerSubmitMutate.isSuccess]);

  const checkBoxUpdate = useCallback(
    (hintData: Block[]): void => {
      const findIndex = checkBox.findIndex((v) => v.step === currentStep);
      console.log(checkBox);
      const newCheckBox = [...checkBox];
      newCheckBox[findIndex].answer = true;
      newCheckBox[findIndex].hint = hintData;
      setCheckBox(newCheckBox);
    },
    [currentStep],
  );

  /**
   * @param v
   * @param key
   * @description: Hint Block Element 생성
   */
  const hintBlockGenerator = (v: Block, key: string) => {
    const hintBlock = [];
    if (answerSubmitMutate.isSuccess) {
      for (let i = 1; i <= data.answerLength; i++) {
        if (!!v[i]) {
          const styling = v[i] === "O" ? "success" : "wrong";
          hintBlock.push(
            <HintBlock className={styling} key={`hint-box-${i}-${key}`} />,
          );
        }
      }
    }
    return hintBlock;
  };

  useEffect(() => {
    resultMessage();
  }, [checkBox]);

  const resultMessage = (): void => {
    if (currentStep > 1) {
      const currentStepIndex = checkBox.findIndex(
        (v) => v.step === currentStep - 1,
      );
      const currentStepAnswer = checkBox[currentStepIndex].hint;
      if (currentStepAnswer.length === 0) return;
      if (currentStep > 5) {
        setMessage("퀴즈가 종료되었습니다. 내일 다시 도전 해주세요!");
        setMessageStyling("default");
        return;
      }
      currentStepAnswer.forEach((value, index) => {
        if (value[`answer${index + 1}`] === "O") {
          setMessage("정답인 글자가 포함되어있어요!");
          setMessageStyling("default");
        } else if (value[`answer${index + 1}`] === "y") {
          setMessage("글자는 포함되어있지만 위치가 다르네요!");
          setMessageStyling("hint");
        } else if (value[`answer${index + 1}`] === "X") {
          setMessage("글자가 포함되어있지 않아요!");
          setMessageStyling("wrong");
        }
      });
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (data) {
      const { answerLength } = data;

      if (e.target.value.length > answerLength) {
        e.target.value = e.target.value.slice(0, answerLength);
      }
      setAnswer(e.target.value);
    }
  };

  const goToHome = async (): Promise<void> => {
    await router.push("/");
  };

  return (
    <S.QuizFormLayout onSubmit={todayQuizAnswerSubmit}>
      <S.CheckBoxContainer>
        {checkBox.map((v, index) => {
          return (
            <li key={index}>
              <CheckCircleIcon className={v.answer && "active"} />
              {v.hint.length > 0 &&
                v.hint.map((block, blockIndex) => {
                  return (
                    <S.FlexBox key={`key-${blockIndex}`}>
                      {hintBlockGenerator(block, `key-${blockIndex}`)}
                    </S.FlexBox>
                  );
                })}
            </li>
          );
        })}
      </S.CheckBoxContainer>

      <S.QuizSolutionBox>
        <S.QuizFormTitle>
          <QuizIcon />
          {isLoading ? (
            <SkeletonUi theme={{ width: 300, height: 20, borderRadius: 4 }} />
          ) : (
            <>
              <Typography
                $variant={"body1"}
                $weight={"bold"}
                $color={"textDefault"}
              >
                {data && data.question}
              </Typography>
            </>
          )}
        </S.QuizFormTitle>
        {!isLoading && (
          <S.QuizAnswerContainer>
            {data && data.prefix && (
              <Typography
                $variant={"body2"}
                $color={"textPrimary"}
                $weight={"bold"}
              >
                {data.prefix}
              </Typography>
            )}
            {emptyBlockElementGenerator()}
            {data && data.suffix && (
              <Typography
                $variant={"body2"}
                $color={"textPrimary"}
                $weight={"bold"}
              >
                {data.suffix}
              </Typography>
            )}
          </S.QuizAnswerContainer>
        )}
      </S.QuizSolutionBox>

      <S.InputContainer>
        {isLoading ? (
          <SkeletonUi theme={{ width: 300, height: 20, borderRadius: 4 }} />
        ) : (
          <Input
            ref={inputRef}
            placeholder={`${data.answerLength} 자`}
            name={"quizAnswer"}
            disabled={currentStep > 5}
            value={answer}
            onChange={(e) => onChangeHandler(e)}
          />
        )}
      </S.InputContainer>

      <S.HintMessageBlock>
        <Typography
          $weight={"bold"}
          $variant={"body1"}
          $color={
            messageStyling === "default"
              ? "textPrimary"
              : messageStyling === "hint"
              ? "textYellow"
              : "textRed000"
          }
        >
          {message}
        </Typography>
      </S.HintMessageBlock>

      <S.ButtonFlexBox>
        <Button variant={"secondary"} type={"button"} onClick={goToHome}>
          <Typography as={"span"} $weight={"bold"}>
            그만하기
          </Typography>
        </Button>
        <Button variant={"primary"} type={"submit"} disabled={currentStep > 5}>
          <Typography as={"span"} $weight={"bold"}>
            제출하기
          </Typography>
        </Button>
      </S.ButtonFlexBox>
    </S.QuizFormLayout>
  );
};
