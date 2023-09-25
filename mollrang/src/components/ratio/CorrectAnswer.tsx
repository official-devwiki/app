import {ReactElement} from 'react';
import styled from 'styled-components';
import {Typography} from '@components/common/Typography';

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
  return (
    <CorrectAnswerLayout>
      <CorrectAnswerBox>
        <Typography weight={'bold'} variant={'body1'}>
          나의 정답률
        </Typography>
        <Typography weight={'bold'} variant={'body1'}>
          10 %
        </Typography>
      </CorrectAnswerBox>
    </CorrectAnswerLayout>
  );
};
