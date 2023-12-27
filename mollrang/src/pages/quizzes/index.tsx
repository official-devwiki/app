import { GetServerSideProps, NextPage } from "next";
import { ReactElement } from "react";
import { QuizContainer } from "@containers/quizzes";
import { dehydrate } from "@tanstack/react-query";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import { QueryKeys } from "@services/keys/queryKeys";
import { getTodayQuizzes } from "@services/apis/quizzes";
import { Quiz } from "@interfaces/quizzes";
import { queryClient } from "@libs/Tanstack";

const QuizPage: NextPage = (): ReactElement => {
  return <QuizContainer />;
};

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      // const queryClient = new QueryClient();
      // await queryClient.prefetchQuery(
      //   [QueryKeys.Quizzes.getTodayQuizzes],
      //   getTodayQuizzes,
      // );
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

export default QuizPage;
