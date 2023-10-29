import { Typography } from "@components/common/Typography";
import { QuizForm } from "@components/quizzes/form/QuizForm";
import * as S from "./index.style";

export const QuizContainer = () => {
  return (
    <S.QuizLayout>
      <S.QuizBox>
        <S.QuizWrapper>
          <Typography $variant={"h1"} $weight={"bold"} $color={"textDefault"}>
            오늘의 퀴즈
          </Typography>
          <QuizForm />
        </S.QuizWrapper>
      </S.QuizBox>
    </S.QuizLayout>
  );
};
