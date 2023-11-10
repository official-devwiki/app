import { GetServerSideProps, NextPage } from "next";
import { ReactElement } from "react";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import { queryClient } from "@libs/Tanstack";
import { QueryKeys } from "@services/keys/queryKeys";
import { getTodayQuizzes } from "@services/apis/quizzes";
import { dehydrate } from "@tanstack/query-core";
import { QuizContainer } from "@containers/quizzes";
import dynamic from "next/dynamic";

// @ts-ignore
// const QuizContainer = dynamic(() => import("@containers/quizzes"));

const QuizPage: NextPage = (): ReactElement => {
  return <QuizContainer />;
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
