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
import {HintBlock} from "@components/ui/block/HintBlock";
import styled from "styled-components";

interface Chance {
  step: number;
  answer: boolean;
}

interface Block {
  [key: string]: string;
}

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > div {
    margin-top: 8px;
    margin-right: 8px;
  }
`;

const initialStepState: Chance[] = [
  { step: 1, answer: false },
  { step: 2, answer: false },
  { step: 3, answer: false },
  { step: 4, answer: false },
  { step: 5, answer: false },
];

export const QuizForm = (): ReactElement => {
  const [checkBox, setCheckBox] = useState<Chance[]>(initialStepState);
  const [answer, setAnswer] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [tryCount, setTrtCount] = useState<number>(1);
  const [block, setBlock] = useState<Block[]>([]);

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

    if (tryCount >= 5) {
      toast.message('내일 다시 도전해주세요.', 'error');
      return;
    }

    const sendData: {count: number, answer: string} = {
      count: tryCount,
      answer
    };
    // 정답 제출
    const { data } = await quizSolutionSubmit(sendData);
    setBlock([...block, ...data])

    // check box update
    const findIndex = checkBox.findIndex((v) => v.step === currentStep);
    const newCheckBox = [...checkBox];
    newCheckBox[findIndex].answer = true;
    setCheckBox(newCheckBox);

    setAnswer('');

    setCurrentStep(currentStep + 1);
    // 시도 횟수 올리기
    setTrtCount(tryCount + 1);
  };

  const hintBlockGenerator = (v: any, key: string) => {
    const hintBlock = [];
    if (quiz) {
      for (let i = 0; i < quiz.answerLength; i++) {
        hintBlock.push(<HintBlock
          className={
            v[`answer${i+1}`] === 'O' ? 'success' : v[`answer${i+1}`] === 'y' ? 'hint' : v[`answer${i+1}`] === 'X' && 'wrong' }
          key={`hint-box-${i}-${key}`}
        />);
      }
    }
    return hintBlock;
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (quiz) {
      const {answerLength} = quiz;

      if (e.target.value.length > answerLength) {
        e.target.value = e.target.value.slice(0, answerLength);
      }
      setAnswer(e.target.value);
    }
  }

  return (
    <S.QuizFormLayout onSubmit={todayQuizAnswerSubmit}>

      <S.CheckBoxContainer>
        {checkBox.map((v, index) => {
          return (
            <li key={index}>
              <CheckCircleIcon className={v.answer && 'active'} />
            </li>
          )
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

      {block.length > 0 && block.map((v, index) => {
        return (
          <FlexBox key={index}>
            {hintBlockGenerator(v, `key-${index}`)}
          </FlexBox>
        )
      })}

      <S.InputContainer>
        <Input
          maxLength={quiz.answerLength && quiz.answerLength}
          minLength={quiz.answerLength && quiz.answerLength}
          name={'quizAnswer'}
          disabled={tryCount >= 5}
          value={answer}
          onChange={(e) => onChangeHandler(e)}
        />
      </S.InputContainer>

      <S.ButtonFlexBox>
        <Button variant={"secondary"}>
          <Typography as={"span"} $weight={'bold'}>그만하기</Typography>
        </Button>
        <Button variant={"primary"} type={"submit"}>
          <Typography as={"span"} $weight={'bold'}>제출하기</Typography>
        </Button>
      </S.ButtonFlexBox>
    </S.QuizFormLayout>
  );
};
