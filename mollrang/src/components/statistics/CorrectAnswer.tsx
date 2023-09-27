import {ReactElement} from 'react';
import styled from 'styled-components';
import {Typography} from '@components/common/Typography';
import {SkeletonUi} from '@components/ui/skeleton/SkeletonUi';
import {useGetMyAnswersQuery} from "@services/queries/ratioQuery";

const CorrectAnswerLayout = styled.div`
  margin-top: 40px;
  margin-bottom: 3em;
  width: 100%;
  padding: 18px 0;
  min-height: 80px;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 767px) {
    border-top: 1px solid var(--correct_border);
    border-bottom: 1px solid var(--correct_border);
    margin-top: 1em;
  }
`;

const CorrectAnswerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;


export const CorrectAnswer = (): ReactElement => {
  const {data, isLoading} = useGetMyAnswersQuery('uuid');

  return (
    <CorrectAnswerLayout>
      <CorrectAnswerBox>
        <Typography weight={'bold'} variant={'body1'}>
          나의 정답률
        </Typography>
        {isLoading ? (<SkeletonUi theme={{height: 20, width: 30, borderRadius: 4}} />) : (
          <Typography weight={'bold'} variant={'body1'}>
            {data && data[0].ratio} %
          </Typography>
        )}
      </CorrectAnswerBox>
    </CorrectAnswerLayout>
  );
};
