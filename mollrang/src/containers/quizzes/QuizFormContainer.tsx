import {Typography} from "@components/common/Typography";
import {QuizForm} from "@components/quizzes/form/QuizForm";
import * as S from "./QuizFormContainer.style";
import {FunctionComponent, useEffect, useState} from "react";
import {quizHistoryCheck} from "@services/apis/quizzes";

type Hint = Record<string, string>;

export interface QuizFormState {
  userId: string;
  count: number;
  isCorrected: boolean;
  hint: Hint[];
}

export const QuizFormContainer: FunctionComponent<{
  quizHistory: QuizFormState[];
}> = ({quizHistory}) => {
  return (
    <S.QuizLayout>
      <S.QuizBox>
        <S.QuizWrapper>
          <Typography $variant={"h1"} $weight={"bold"} $color={"textDefault"}>
            오늘의 퀴즈
          </Typography>
          <QuizForm quizFormState={quizHistory}/>
        </S.QuizWrapper>
      </S.QuizBox>
    </S.QuizLayout>
  );
};
