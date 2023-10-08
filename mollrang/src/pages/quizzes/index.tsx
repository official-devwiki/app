import {NextPage} from 'next';
import {ReactElement} from 'react';
import styled from 'styled-components';
import {QuizForm} from '@components/quizzes/form/QuizForm';
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




const QuizPage: NextPage = (): ReactElement => {
  return (
    <QuizLayout>
      <QuizContainer>
        <QuizBox>
          <Typography variant={'h1'} weight={'bold'} color={'textDefault'}>
            오늘의 퀴즈
          </Typography>
          <QuizForm />
        </QuizBox>
      </QuizContainer>
    </QuizLayout>
  );
};

export default QuizPage;
