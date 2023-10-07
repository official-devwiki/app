import {NextPage} from 'next';
import {ReactElement} from 'react';
import styled from 'styled-components';
import {QuizForm} from '@components/quizzes/form/QuizForm';
import {Button} from '@components/common/Button';
import {Typography} from '@components/common/Typography';

const QuizLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 4em 1.5em 0;
`;

const QuizContainer = styled.div`
  max-width: 900px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  width: 100%;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;

  button:nth-child(1) {
    margin-right: 1em;
  }
`;


const QuizPage: NextPage = (): ReactElement => {
  return (
    <QuizLayout>
      <QuizContainer>
        <QuizBox>
          <Typography variant={'h1'} weight={'bold'} color={'textDefault'}>
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
