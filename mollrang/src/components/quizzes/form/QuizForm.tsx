import React, {ReactElement, useState} from 'react';
import {Typography} from '@components/common/Typography';
import {QuizIcon} from '@components/common/icons/QuizIcon';
import {BlockInput} from '@components/common/Input/BlockInpu';
import * as S from './style';
import {EmptyBlock} from '@components/ui/block/EmptyBlock';
import {SkeletonUi} from '@components/ui/skeleton/SkeletonUi';
import {useTodayQuizzesQuery} from "@services/queries/quizzesQuery";
import {Button} from "@components/common/Button";

interface Chance {
  step: number;
  answer: string;
}

const initialStepState: Chance[] = [
  {step: 1, answer: ''},
  {step: 2, answer: ''},
  {step: 3, answer: ''},
  {step: 4, answer: ''},
  {step: 5, answer: ''}
];

interface Answer {
  key: string;
  answer: string;
}

//TODO 1. ServerSidePage로 변경
export const QuizForm = (): ReactElement => {
  const [chance, setChance] = useState<Chance[]>(initialStepState);
  const [answers, setAnswer] = useState<Answer[]>([]);
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

  const todayQuizAnswerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO 제출 후 다음 단계로
    setCurrentStep(+currentStep);
  }

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = e.target;
    console.log(e.target)
    setAnswer([
      ...answers,
      {
        key: name,
        answer: value
      }
    ]);
    console.log(answers)
  }

  const textInputElementGenerator = (step: number): ReactElement[] => {
    const input = [];
    const disabled = currentStep !== step;
    if (quiz) {
      for (let i = 0; i < quiz.answerLength; i++) {
        input.push(<BlockInput name={String(i+1)} onChange={e => onChangeInputHandler(e)} disabled={disabled} />);
      }
    }
    return input
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
            <S.InputLayout key={value.step + index}>
              {textInputElementGenerator(value.step)}
            </S.InputLayout>
          )
        })}
      </S.InputContainer>

      <S.ButtonFlexBox>
        <Button variant={'secondary'}>
          <Typography as={'span'}>
            그만하기
          </Typography>
        </Button>
        <Button variant={'primary'} type={"submit"}>
          <Typography as={'span'}>
            제출하기
          </Typography>
        </Button>
      </S.ButtonFlexBox>
    </S.QuizFormLayout>
  );
};
