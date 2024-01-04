import { Typography } from "@components/common/Typography";
import { QuizForm } from "@components/quizzes/form/QuizForm";
import * as S from "./QuizFormContainer.style";
import { FunctionComponent, useEffect, useState } from "react";
import { quizHistoryCheck } from "@services/apis/quizzes";

type Hint = Record<string, string>;

export interface QuizFormState {
  userId: string;
  count: number;
  hint: Hint[];
}

export const QuizFormContainer: FunctionComponent<{ userId: string }> = ({
  userId,
}) => {
  const [quizFormState, setQuizFormState] = useState<QuizFormState[]>([]);
  const historyCheck = async () => {
    const result: QuizFormState[] = await quizHistoryCheck(userId);
    setQuizFormState(result);
  };

  useEffect(() => {
    historyCheck();
  }, []);

  return (
    <S.QuizLayout>
      <S.QuizBox>
        <S.QuizWrapper>
          <Typography $variant={"h1"} $weight={"bold"} $color={"textDefault"}>
            오늘의 퀴즈
          </Typography>
          <QuizForm quizFormState={quizFormState} />
        </S.QuizWrapper>
      </S.QuizBox>
    </S.QuizLayout>
  );
};
