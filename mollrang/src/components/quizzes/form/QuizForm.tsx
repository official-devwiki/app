import React, { ReactElement, useRef, useState } from "react";
import { Typography } from "@components/common/Typography";
import { QuizIcon } from "@components/common/icons/QuizIcon";
import * as S from "./style";
import { EmptyBlock } from "@components/ui/block/EmptyBlock";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import { useTodayQuizzesQuery } from "@services/queries/quizzesQuery";
import { Button } from "@components/common/Button";
import toast from "@components/common/toast/ToastHandler";
import { quizSolutionSubmit } from "@services/apis/quizzes";
import { Input } from "@components/common/input/Input";
import { CheckCircleIcon } from "@components/common/icons/CheckCircleIcon";
import { HintBlock } from "@components/ui/block/HintBlock";
import { useRouter } from "next/router";
import { Block, Chance, Quiz } from "@interfaces/quizzes";

const initialStepState: Chance[] = [
  { step: 1, answer: false, hint: [] },
  { step: 2, answer: false, hint: [] },
  { step: 3, answer: false, hint: [] },
  { step: 4, answer: false, hint: [] },
  { step: 5, answer: false, hint: [] },
];

export const QuizForm = (): ReactElement => {
  const [checkBox, setCheckBox] = useState<Chance[]>(initialStepState);
  const [answer, setAnswer] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const { data, isLoading } = useTodayQuizzesQuery<Quiz>();

  const emptyBlockElementGenerator = (): ReactElement[] => {
    const block = [];
    if (data) {
      for (let i = 0; i < data.answerLength; i++) {
        block.push(<EmptyBlock key={`empty-box-${i}`} />);
      }
    }
    return block;
  };

  const todayQuizAnswerSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!inputValidation()) return;

    const sendData: { count: number; answer: string } = {
      count: currentStep,
      answer,
    };
    // 정답 제출
    const { data } = await quizSolutionSubmit(sendData);
    // check box update
    checkBoxUpdate(data);

    setAnswer("");
    setCurrentStep(currentStep + 1);
  };

  const checkBoxUpdate = (hintData: Block[]): void => {
    const findIndex = checkBox.findIndex((v) => v.step === currentStep);
    const newCheckBox = [...checkBox];
    newCheckBox[findIndex].answer = true;
    newCheckBox[findIndex].hint = hintData;
    setCheckBox(newCheckBox);
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

  const hintBlockGenerator = (v: Block, key: string) => {
    const hintBlock = [];
    if (data) {
      for (let i = 0; i < data.answerLength; i++) {
        const styling =
          v[`answer${i + 1}`] === "O"
            ? "success"
            : v[`answer${i + 1}`] === "y"
            ? "hint"
            : v[`answer${i + 1}`] === "X" && "wrong";
        hintBlock.push(
          <HintBlock className={styling} key={`hint-box-${i}-${key}`} />,
        );
      }
    }
    return hintBlock;
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
                {data.question}
              </Typography>
            </>
          )}
        </S.QuizFormTitle>
        <S.QuizAnswerContainer>
          {emptyBlockElementGenerator()}
          {data.prefixWord && (
            <Typography
              $variant={"body2"}
              $color={"textPrimary"}
              $weight={"bold"}
            >
              {data.prefixWord}
            </Typography>
          )}
          {data.suffixWord && (
            <Typography
              $variant={"body2"}
              $color={"textPrimary"}
              $weight={"bold"}
            >
              {data.suffixWord}
            </Typography>
          )}
        </S.QuizAnswerContainer>
      </S.QuizSolutionBox>

      <S.InputContainer>
        <Input
          ref={inputRef}
          placeholder={`${data.answerLength} 자`}
          name={"quizAnswer"}
          disabled={currentStep > 5}
          value={answer}
          onChange={(e) => onChangeHandler(e)}
        />
      </S.InputContainer>

      <S.ButtonFlexBox>
        <Button variant={"secondary"} type={"button"} onClick={goToHome}>
          <Typography as={"span"} $weight={"bold"}>
            그만하기
          </Typography>
        </Button>
        <Button variant={"primary"} type={"submit"}>
          <Typography as={"span"} $weight={"bold"}>
            제출하기
          </Typography>
        </Button>
      </S.ButtonFlexBox>
    </S.QuizFormLayout>
  );
};
