import {NextPage} from 'next';
import {ReactElement} from 'react';
import styled from 'styled-components';
import {QuizForm} from '@components/quizzes/QuizForm';
import {Button} from '@components/common/Button';
import {Typography} from '@components/common/Typography';

const QuizLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const QuizContainer = styled.div`
  max-width: 900px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

`;

const QuizBox = styled.div`
  min-width: 323px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;


const QuizPage: NextPage = (): ReactElement => {
  return (
    <QuizLayout>
      <QuizContainer>
        <QuizBox>
          <Typography variant={'h1'} weight={'bold'}>
            오늘의 퀴즈
          </Typography>
          <QuizForm />
          <FlexBox>
            <Button variant={'secondary'}>
              <Typography as={'span'}>
                그만하기
              </Typography>
            </Button>
            <Button variant={'primary'}>
              <Typography as={'span'}>
                제출하기
              </Typography>
            </Button>
          </FlexBox>
        </QuizBox>
      </QuizContainer>
    </QuizLayout>
  );
};

export default QuizPage;
