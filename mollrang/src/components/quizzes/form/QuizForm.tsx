import React, { ReactElement, useEffect, useState } from "react";
import { Typography } from "@components/common/Typography";
import { QuizIcon } from "@components/common/icons/QuizIcon";
import { BlockInput as Input } from "@components/common/Input/BlockInpu";
import * as S from "./style";
import { EmptyBlock } from "@components/ui/block/EmptyBlock";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import { useTodayQuizzesQuery } from "@services/queries/quizzesQuery";
import { Button } from "@components/common/Button";
import toast from "@components/common/toast/ToastHandler";
import { useMutation } from "@tanstack/react-query";
import { quizSolutionSubmit } from "@apis/quizzes";

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

interface Answer {
  key: string;
  answer: string;
}

export const QuizForm = (): ReactElement => {
  const [chance, setChance] = useState<Chance[]>(initialStepState);
  const [answers, setAnswers] = useState<Answer[]>([]);
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
  useEffect(() => {
    if (quiz.answerLength > 0) {
      let values = [];
      for (let i = 0; i < quiz.answerLength; i++) {
        values.push({ key: "", answer: "" });
      }
      setAnswers(values);
    }
  }, [isLoading]);

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

    let result = "";
    let key = "";
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].answer === "") {
        toast.message("정답을 입력해주세요.", "error");
        return;
      }

      key = answers[i].key;
      result += answers[i].answer;
    }
    const sendData: any = {
      tryCount,
      result,
    };

    const { data } = await quizSolutionSubmit(sendData);
    console.log(data);

    // 2. 전송 후 전달
    setCurrentStep(currentStep + 1);

    setAnswers([]);
  };

  const onChangeInputText = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = e.target;
    const values: Answer[] = [...answers];

    if (value.length > 1) e.target.value = value.slice(0, 1);

    values[index].key = name;
    values[index].answer = e.target.value;

    setAnswers(values);
  };

  const textInputElementGenerator = (step: number): ReactElement[] => {
    const input = [];
    const disabled = currentStep !== step;
    if (quiz) {
      for (let i = 0; i < quiz.answerLength; i++) {
        input.push(
          <Input
            name={String(i + 1)}
            onChange={(e) => onChangeInputText(i, e)}
            disabled={disabled}
            key={`input-box-${i}`}
          />,
        );
      }
    }
    return input;
  };

  return (
    <S.QuizFormLayout onSubmit={todayQuizAnswerSubmit}>
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
        {chance.map((value, index) => {
          return (
            <S.InputLayout key={value.step + index}>
              {textInputElementGenerator(value.step)}
            </S.InputLayout>
          );
        })}
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
