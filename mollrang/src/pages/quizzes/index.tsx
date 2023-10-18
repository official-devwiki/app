import { GetServerSideProps, NextPage } from "next";
import { ReactElement } from "react";
import styled from "styled-components";
import { QuizForm } from "@components/quizzes/form/QuizForm";
import { Typography } from "@components/common/Typography";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import { queryClient } from "@libs/Tanstack";
import { QueryKeys } from "@services/keys/queryKeys";
import { getTodayQuizzes } from "@apis/quizzes";
import { dehydrate } from "@tanstack/query-core";

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
          <Typography $variant={"h1"} $weight={"bold"} $color={"textDefault"}>
            오늘의 퀴즈
          </Typography>
          <QuizForm />
        </QuizBox>
      </QuizContainer>
    </QuizLayout>
  );
};

export default QuizPage;

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      await queryClient.prefetchQuery([QueryKeys.Quizzes.getTodayQuizzes], () =>
        getTodayQuizzes(),
      );
      return {
        props: {
          dehydratedState: dehydrate(queryClient),
        },
      };
    } catch (e) {
      return {
        props: {},
      };
    }
  },
);
