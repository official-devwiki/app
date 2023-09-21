import {ReactElement} from 'react';
import styled from 'styled-components';
import {Typography} from '@components/common/Typography';

const CorrectAnswerLayout = styled.div`
  margin-top: 40px;
  border-top: 1px solid var(--correct_border);
  border-bottom: 1px solid var(--correct_border);
  width: 100%;
  padding: 18px 0;
  min-height: 80px;
  display: flex;
  align-items: center;
`;

const CorrectAnswerBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  .correct-title {
    margin-right: 5em;
  }
`;

const FlexBox = styled.div`
  display: flex;

  .recently_date {
    margin-right: 5em;
  }
`;

export const CorrectAnswer = (): ReactElement => {
  return (
    <CorrectAnswerLayout>
      <CorrectAnswerBox>
        <Typography className={'correct-title'} weight={'bold'} variant={'body1'}>
          나의 정답률
        </Typography>
        <FlexBox>
          <Typography className={'recently_date'} variant={'caption'} color={'sub_text'} weight={'bold'}>
            2023. 09. 21
          </Typography>
          <Typography weight={'bold'} variant={'body1'}>
            10 %
          </Typography>
        </FlexBox>
      </CorrectAnswerBox>
    </CorrectAnswerLayout>
  );
};
