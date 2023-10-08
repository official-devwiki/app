import React, {ReactElement, useState} from 'react';
import {Typography} from '@components/common/Typography';
import {QuizIcon} from '@components/common/icons/QuizIcon';
import {BlockInput} from '@components/common/Input/BlockInpu';
import * as S from './style';
import {EmptyBlock} from '@components/ui/block/EmptyBlock';
import {SkeletonUi} from '@components/ui/skeleton/SkeletonUi';
import {useTodayQuizzesQuery} from "@services/queries/quizzesQuery";
import {Button} from "@components/common/Button";
import styled from "styled-components";

interface Chance {
  step: number;
  answer: string;
}

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;

  button:nth-child(1) {
    margin-right: 1em;
  }
`;

//TODO 1. ServerSidePage로 변경
export const QuizForm = (): ReactElement => {
  const [chance, setChance] = useState<Chance[]>([{step: 1, answer: ''},{step: 2, answer: ''},{step: 3, answer: ''},{step: 4, answer: ''},{step: 5, answer: ''},]);
  const [currentStep, setCurrentStep] = useState(1);
  const {quiz, isLoading} = useTodayQuizzesQuery();

  const emptyBlockElementGenerator = (): ReactElement[] => {
    const block = [];
    if (quiz) {
      for (let i = 0; i < quiz.answerLength; i++) {
        block.push(<EmptyBlock />);
      }
    }
    return block;
  }

  const textInputElementGenerator = (step: number): ReactElement[] => {
    const input = [];
    const disabled = currentStep !== step;
    if (quiz) {
      for (let i = 0; i < quiz.answerLength; i++) {
        input.push(<BlockInput disabled={disabled} />);
      }
    }
    return input
  }

  const todayQuizAnswerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log('?1')
    e.preventDefault();
    console.log('?2')

    // TODO 제출 후 다음 단계로
    setCurrentStep(+currentStep);
  }

  return (
    <S.QuizFormLayout onSubmit={todayQuizAnswerSubmit}>
      <S.QuizSolutionBox>
        <S.QuizFormTitle>
          <QuizIcon />
          {isLoading ? (<SkeletonUi theme={{height: 40, borderRadius: 4}} />) : (
            <>
              <Typography variant={'body1'} weight={'bold'} color={'textDefault'}>
                {quiz.question}
              </Typography>
            </>)}
        </S.QuizFormTitle>

        <S.FlexBox>
          {emptyBlockElementGenerator()}
          {quiz.prefixWord && (<Typography variant={'body2'} color={'textPrimary'} weight={'bold'}>{quiz.prefixWord}</Typography>)}
          {quiz.suffixWord && (<Typography variant={'body2'} color={'textPrimary'} weight={'bold'}>{quiz.suffixWord}</Typography>)}
        </S.FlexBox>
      </S.QuizSolutionBox>

      <S.InputContainer>
        {chance.map((value, index) => {
          return (
            <S.InputLayout key={value.step}>
              {textInputElementGenerator(value.step)}
            </S.InputLayout>
          )
        })}
      </S.InputContainer>

      <FlexBox>
        <Button variant={'secondary'}>
          <Typography as={'span'}>
            그만하기
          </Typography>
        </Button>
        <button type={'submit'}>Test</button>
        <Button variant={'primary'} type={"submit"}>
          <Typography as={'span'}>
            제출하기
          </Typography>
        </Button>
      </FlexBox>
    </S.QuizFormLayout>
  );
};
