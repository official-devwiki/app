import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from "next";
import {ReactElement} from "react";
import {QuizContainer} from "@containers/quizzes";
import {dehydrate} from "@tanstack/react-query";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import {QueryKeys} from "@services/keys/queryKeys";
import {getTodayQuizzes} from "@services/apis/quizzes";
import {Quiz} from "@interfaces/quizzes";
import {queryClient} from "@libs/Tanstack";
import Cookies from "cookies";

const QuizPage: NextPage<InferGetServerSidePropsType<GetServerSideProps>> = ({userId}): ReactElement => {
  return <QuizContainer userId={userId}/>;
};

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      const {req, res} = ctx;
      const cookies = new Cookies(req, res);
      const userId = cookies.get("user");
      // const queryClient = new QueryClient();
      // await queryClient.prefetchQuery(
      //   [QueryKeys.Quizzes.getTodayQuizzes],
      //   getTodayQuizzes,
      // );
      return {
        props: {
          dehydratedState: dehydrate(queryClient),
          userId
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
