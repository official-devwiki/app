import React, { ReactElement, useEffect, useState } from "react";
import { Typography } from "@components/common/Typography";
import { QuizIcon } from "@components/common/icons/QuizIcon";
import * as S from "./style";
import { EmptyBlock } from "@components/ui/block/EmptyBlock";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import { useTodayQuizzesQuery } from "@services/queries/quizzesQuery";
import { Button } from "@components/common/Button";
import toast from "@components/common/toast/ToastHandler";
import { quizSolutionSubmit } from "@apis/quizzes";
import {Input} from "@components/common/input/Input";
import {CheckCircleIcon} from "@components/common/icons/CheckCicleIcon";
import {CheckBoxContainer} from "./style";

interface Chance {
  step: number;
  answer: string;
}

const initialStepState: Chance[] = [
  { step: 1, answer: "" },
  { step: 2, answer: "" },
  { step: 3, answer: "" },
  { step: 4, answer: "" },
  { step: 5, answer: "" },
];

export const QuizForm = (): ReactElement => {
  const [answer, setAnswer] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);
  const [tryCount, setTrtCount] = useState(0);

  // const {
  //   mutate,
  //   isLoading: mutationLoading,
  //   isError,
  //   error,
  //   isSuccess,
  // } = useMutation(quizSolutionSubmit);

  const { quiz, isLoading } = useTodayQuizzesQuery();

  const emptyBlockElementGenerator = (): ReactElement[] => {
    const block = [];
    if (quiz) {
      for (let i = 0; i < quiz.answerLength; i++) {
        block.push(<EmptyBlock key={`empty-box-${i}`} />);
      }
    }
    return block;
  };

  const todayQuizAnswerSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (answer.length <= 0) {
      toast.message('정답을 입력해 주세요.', 'error');
      return;
    }

    const sendData: any = {
      tryCount,
    };

    const { data } = await quizSolutionSubmit(sendData);
    console.log(data);
    // 2. 전송 후 전달
    setCurrentStep(currentStep + 1);
  };


  return (
    <S.QuizFormLayout onSubmit={todayQuizAnswerSubmit}>

      <S.CheckBoxContainer>
        <li>
          <CheckCircleIcon className={'active'} />
        </li>
        <li>
          <CheckCircleIcon />
        </li>
        <li>
          <CheckCircleIcon />
        </li>
        <li>
          <CheckCircleIcon />
        </li>
        <li>
          <CheckCircleIcon />
        </li>
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
                {quiz.question}
              </Typography>
            </>
          )}
        </S.QuizFormTitle>
        <S.FlexBox>
          {emptyBlockElementGenerator()}
          {quiz.prefixWord && (
            <Typography
              $variant={"body2"}
              $color={"textPrimary"}
              $weight={"bold"}
            >
              {quiz.prefixWord}
            </Typography>
          )}
          {quiz.suffixWord && (
            <Typography
              $variant={"body2"}
              $color={"textPrimary"}
              $weight={"bold"}
            >
              {quiz.suffixWord}
            </Typography>
          )}
        </S.FlexBox>
      </S.QuizSolutionBox>

      <S.InputContainer>
        <Input
          maxLength={quiz.answerLength && quiz.answerLength}
          minLength={quiz.answerLength && quiz.answerLength}
          name={'quizAnswer'}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </S.InputContainer>

      <S.ButtonFlexBox>
        <Button variant={"secondary"}>
          <Typography as={"span"}>그만하기</Typography>
        </Button>
        <Button variant={"primary"} type={"submit"}>
          <Typography as={"span"}>제출하기</Typography>
        </Button>
      </S.ButtonFlexBox>
    </S.QuizFormLayout>
  );
};
