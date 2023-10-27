import styled from "styled-components";
import {Typography} from "@components/common/Typography";
import {QuizForm} from "@components/quizzes/form/QuizForm";

const QuizLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 4em 1.5em 0;
`;

const QuizBox = styled.div`
  max-width: 900px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  width: 100%;
`;

export const QuizContainer = () => {
  return (
    <QuizLayout>
      <QuizBox>
        <QuizWrapper>
          <Typography $variant={"h1"} $weight={"bold"} $color={"textDefault"}>
            오늘의 퀴즈
          </Typography>
          <QuizForm />
        </QuizWrapper>
      </QuizBox>
    </QuizLayout>
  )
}