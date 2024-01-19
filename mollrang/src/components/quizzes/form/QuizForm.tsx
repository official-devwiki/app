import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Typography } from "@components/common/Typography";
import { QuizIcon } from "@components/common/icons/QuizIcon";
import * as S from "./style";
import { EmptyBlock } from "@components/ui/block/EmptyBlock";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import { useTodayQuizzesQuery } from "@services/queries/quizzesQuery";
import { Button } from "@components/common/Button";
import { Input } from "@components/common/input/Input";
import { CheckCircleIcon } from "@components/common/icons/CheckCircleIcon";
import { HintBlock } from "@components/ui/block/HintBlock";
import { useRouter } from "next/router";
import { Block, QuizFormProps } from "@interfaces/quizzes";
import { useQuizAnswerSubmitMutate } from "@services/mutations/quizzesMutation";
import { useAppDispatch } from "@hooks/useRedux";
import { State, setModalOpen } from "@store/slice/modalSlice";
import { MODAL_TYPE } from "@interfaces/store";
import toast from "react-hot-toast";
import ToastOptions from "react-hot-toast";
import { setCompleteCount, setCorrected } from "@store/slice/quizSlice";
import { useAuth } from "@providers/authProvider";

export const QuizForm = (props: QuizFormProps): ReactElement => {
  const {
    currentStep,
    checkBox,
    todayCompleted,
    setCurrentStep,
    setTodayCompleted,
    setCheckBox,
  } = props;
  const { userInfo } = useAuth();

  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [messageStyling, setMessageStyling] = useState("default");

  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const { data, isLoading } = useTodayQuizzesQuery();
  const answerSubmitMutate = useQuizAnswerSubmitMutate();

  const EmptyBlockElementGenerator = (): ReactElement[] => {
    const block = [];
    if (data) {
      for (let i = 0; i < data.answerLength; i++) {
        block.push(<EmptyBlock key={`empty-box-${i}`} />);
      }
    }
    return block;
  };

  const inputValidation = (): boolean => {
    const toastOption: any = {
      duration: 1500,
      style: {
        backgroundColor: "#ffc2c2",
      },
      position: "top-right",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    };
    if (answer.length <= 0) {
      toast.error("정답을 입력해 주세요.", toastOption);
      if (inputRef.current !== null) inputRef.current.focus();
      return false;
    } else if (answer.length < data.answerLength) {
      toast.error("글자 수를 확인해 주세요.", toastOption);
      if (inputRef.current !== null) inputRef.current.focus();
      return false;
    }
    if (currentStep > 5) {
      toast.error("더 이상 정답을 제출할 수 없습니다.", toastOption);
      return false;
    }
    return true;
  };

  const todayQuizAnswerSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (!inputValidation()) return;
    const userId = userInfo?.id;
    const sendData: { userId: string; count: number; answer: string } = {
      count: currentStep + 1,
      answer,
      userId,
    };

    // 정답 제출
    answerSubmitMutate.mutate(sendData);
  };

  useEffect(() => {
    if (answerSubmitMutate.isSuccess && answerSubmitMutate.data) {
      // 최종 답안이 존재할 경우 퀴즈 종료로 간주한다.
      const toastOption: any = {
        duration: 1500,
        style: {
          backgroundColor: "#e0ffde",
        },
        position: "bottom-center",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      };
      if (answerSubmitMutate.data.isCorrected) {
        setAnswer("");
        toast.success("정답입니다~!", toastOption);
        dispatch(setCorrected(true));
        completedSystemMessage();
        checkBoxUpdate([]);
        completedModalOpen();
      } else if (
        answerSubmitMutate.data.todayAnswer &&
        answerSubmitMutate.data.todayAnswer.length > 0
      ) {
        setAnswer("");
        completedSystemMessage();
        checkBoxUpdate([]);
        completedModalOpen();
      } else {
        checkBoxUpdate(answerSubmitMutate.data.hint);
        resultMessage(answerSubmitMutate.data.hint);
      }
      setAnswer("");
      setCurrentStep();
    }
  }, [answerSubmitMutate.isSuccess]);

  /**@description 완료 모달 열기*/
  const completedModalOpen = () => {
    const modalState: State = {
      type: "quiz-completed",
      modalType: MODAL_TYPE.FADE,
      isOpen: true,
    };
    dispatch(setCompleteCount(currentStep));
    dispatch(setModalOpen(modalState));
  };

  /**@description 완료 메세지 출력*/
  const completedSystemMessage = () => {
    setTodayCompleted(true);
    setMessage("퀴즈가 종료되었습니다. 내일 다시 도전 해주세요!");
    setMessageStyling("default");
  };

  const checkBoxUpdate = (hintData: Block[]): void => {
    const step = currentStep === 0 ? 1 : currentStep + 1;
    const findIndex = checkBox.findIndex((v) => v.step === step);
    const newCheckBox = [...checkBox];
    newCheckBox[findIndex].answer = true;
    newCheckBox[findIndex].hint = hintData;
    setCheckBox(newCheckBox);
  };

  /**
   * @param v
   * @param key
   */
  const hintBlockGenerator = (v: Block, key: string) => {
    const hintBlock = [];
    if (answerSubmitMutate.isSuccess) {
      for (let i = 1; i <= data.answerLength; i++) {
        if (!!v[i]) {
          const styling =
            v[i] === "O" ? "success" : v[i] === "A" ? "hint" : "wrong";
          hintBlock.push(
            <HintBlock className={styling} key={`hint-box-${i}-${key}`} />,
          );
        }
      }
    }
    return hintBlock;
  };

  /** @description: Hint Block Element 생성 */
  const HintBlocks = (): ReactElement[] => {
    return checkBox.map((v, index) => {
      return (
        <li key={index}>
          <CheckCircleIcon className={v.answer && "active"} />
          {v.hint?.length >= 0 &&
            v.hint.map((block, blockIndex) => {
              return (
                <S.FlexBox key={`key-${blockIndex}`}>
                  {hintBlockGenerator(block, `key-${blockIndex}`)}
                </S.FlexBox>
              );
            })}
        </li>
      );
    });
  };

  const resultMessage = (hint: Block[]) => {
    const hintExist = hint.filter(
      (value, index) => value[index + 1] === "O" || value[index + 1] === "A",
    );

    if (hintExist.length > 0) {
      setMessage("정답인 글자가 포함되어있어요!");
      setMessageStyling("default");
    } else if (hintExist.length === 0) {
      setMessage("글자가 포함되어있지 않아요!");
      setMessageStyling("wrong");
    }
  };

  useEffect(() => {
    if (todayCompleted) {
      setMessage("퀴즈가 종료되었습니다. 내일 다시 도전 해주세요!");
      setMessageStyling("default");
      completedModalOpen();
    }
  }, [todayCompleted]);

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
        <HintBlocks />
      </S.CheckBoxContainer>

      <S.QuizSolutionBox>
        <S.QuizFormTitle>
          <QuizIcon />
          {isLoading ? (
            <SkeletonUi theme={{ width: 300, height: 20, borderRadius: 4 }} />
          ) : (
            <>
              <Typography $variant={"body1"} $color={"textDefault"}>
                {data && data.question}
              </Typography>
            </>
          )}
        </S.QuizFormTitle>
        {!isLoading && (
          <S.QuizAnswerContainer>
            {data && data.prefix && (
              <Typography
                className="prefix_word"
                $variant={"body2"}
                $color={"textPrimary"}
                $weight={"bold"}
              >
                {data.prefix}
              </Typography>
            )}
            <EmptyBlockElementGenerator />
            {data && data.suffix && (
              <Typography
                className={"suffix_word"}
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
            disabled={todayCompleted}
            value={answer}
            onChange={(e) => onChangeHandler(e)}
          />
        )}
      </S.InputContainer>

      <S.HintMessageBlock>
        <Typography
          $variant={"body2"}
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
          <Typography as={"span"}>그만하기</Typography>
        </Button>
        <Button variant={"primary"} type={"submit"} disabled={todayCompleted}>
          <Typography as={"span"}>제출하기</Typography>
        </Button>
      </S.ButtonFlexBox>
    </S.QuizFormLayout>
  );
};
