import React, {ReactElement} from "react";
import {useTodayRandomQuizzesQuery} from "@services/queries/quizzesQuery";
import {EmptyBlock} from "@components/ui/block/EmptyBlock";
import * as S from "./style";
import {Typography} from "@components/common/Typography";
import {EmoticonIcon} from "@components/common/icons/EmoticonIcon";
import {SkeletonUi} from "@components/ui/skeleton/SkeletonUi";

export const TodayRandomQuiz = (): ReactElement => {
  const {quiz, isLoading} = useTodayRandomQuizzesQuery();

  const emptyBlockElementGenerator = (): ReactElement[] => {
    const block = [];
    if (quiz) {
      for (let i = 0; i < quiz.answerLength; i++) {
        block.push(<EmptyBlock key={`empty-box-${i}`} />);
      }
    }
    return block;
  };

  return (
    <S.RandomQuizLayout>
      <S.FlexBox>
        <Typography
          $variant={"body2"}
          $weight={"bold"}
          $color={"textDefault"}
          className={"shorts-title"}
        >
          피식
        </Typography>
        <EmoticonIcon />
      </S.FlexBox>
      <S.RandomQuizContainer>
        {isLoading ? (
          <SkeletonUi theme={{ height: 40, borderRadius: 4 }} />
        ) : (
          <S.RandomQuizTitleBlock>
            <Typography
              $variant={"body1"}
              $weight={"medium"}
              $color={"textDefault"}
              data-testid={"random-quiz-question"}
            >
              {quiz && quiz.question}
            </Typography>
          </S.RandomQuizTitleBlock>
        )}
        <S.AnswerBox>
          {isLoading ? (
            <SkeletonUi theme={{ height: 20, width: 80, borderRadius: 4 }} />
          ) : (
            <>
              <Typography $color={"textDefault"} data-testid={"shorts-answer"}>
                {quiz && quiz.prefixWord}
              </Typography>
              {emptyBlockElementGenerator()}
              <Typography $color={"textDefault"} data-testid={"shorts-answer"}>
                {quiz && quiz.suffixWord}
              </Typography>
            </>
          )}
        </S.AnswerBox>
      </S.RandomQuizContainer>
    </S.RandomQuizLayout>
  );
}