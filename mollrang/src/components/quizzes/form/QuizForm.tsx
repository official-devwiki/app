import {ReactElement, useState} from 'react';
import {Typography} from '@components/common/Typography';
import {QuizIcon} from '@components/common/icons/QuizIcon';
import {BlockInput} from '@components/common/Input/BlockInpu';
import * as S from './style';
import {EmptyBlock} from '@components/ui/block/EmptyBlock';
import {useTodayShortsQuery} from '@services/queries/shortsQuery';
import {SkeletonUi} from '@components/ui/skeleton/SkeletonUi';

export const QuizForm = (): ReactElement => {
  const [step, setStep] = useState(1);
  const {data, isLoading} = useTodayShortsQuery();

  const makeInput = () => {
    const inputArr = [];
    for (let i = 0; i < 5; i++) {
      inputArr.push(<BlockInput />);
    }
    return inputArr;
  };

  return (
    <S.QuizFormLayout>
      <S.QuizSolutionBox>
        <S.QuizFormTitle>
          <QuizIcon />
          {isLoading ? (<SkeletonUi theme={{height: 40, borderRadius: 4}} />) : (
            <>
              <Typography variant={'body1'} weight={'bold'} color={'textDefault'}>
                {data && data[0].question}
              </Typography>
            </>)}
        </S.QuizFormTitle>

        <S.FlexBox>
          <EmptyBlock />
          <EmptyBlock />
          <Typography variant={'body2'} color={'textPrimary'} weight={'bold'}>꼬여서</Typography>
        </S.FlexBox>
      </S.QuizSolutionBox>

      <S.InputContainer>
        {new Array(5).map((value, index) => {
          return (
            <S.InputLayout key={index}>
              <BlockInput disabled={step !== index + 1} />
              <BlockInput disabled={step !== index + 1} />
              <BlockInput disabled={step !== index + 1} />
            </S.InputLayout>
          );
        })}
      </S.InputContainer>

    </S.QuizFormLayout>
  );
};
