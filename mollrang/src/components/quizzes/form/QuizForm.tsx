import React, { ReactElement, useEffect, useState } from "react";
import { Typography } from "@components/common/Typography";
import { QuizIcon } from "@components/common/icons/QuizIcon";
import { BlockInput as Input } from "@components/common/Input/BlockInpu";
import * as S from "./style";
import { EmptyBlock } from "@components/ui/block/EmptyBlock";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import { useTodayQuizzesQuery } from "@services/queries/quizzesQuery";
import { Button } from "@components/common/Button";

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

  const todayQuizAnswerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO 1. 서버에 값 전송
    // 2. 전송 후 전달
    setCurrentStep(currentStep + 1);
    console.log(answers);
  };

  const onChangeInputHandler = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = e.target;
    const values: Answer[] = [...answers];

    values[index].key = name;
    values[index].answer = value;

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
            onChange={(e) => onChangeInputHandler(i, e)}
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
            <Typography $variant={"body2"} $color={"textPrimary"} $weight={"bold"}>
              {quiz.prefixWord}
            </Typography>
          )}
          {quiz.suffixWord && (
            <Typography $variant={"body2"} $color={"textPrimary"} $weight={"bold"}>
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
