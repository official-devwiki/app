import { Typography } from "@components/common/Typography";
import { QuizForm } from "@components/quizzes/form/QuizForm";
import * as S from "./QuizFormContainer.style";
import { FunctionComponent } from "react";

export const QuizFormContainer: FunctionComponent<{ userId: string }> = ({
  userId,
}) => {
  return (
    <S.QuizLayout>
      <S.QuizBox>
        <S.QuizWrapper>
          <Typography $variant={"h1"} $weight={"bold"} $color={"textDefault"}>
            오늘의 퀴즈
          </Typography>
          <QuizForm userId={userId} />
        </S.QuizWrapper>
      </S.QuizBox>
    </S.QuizLayout>
  );
};
