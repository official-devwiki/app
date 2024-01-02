import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ReactElement } from "react";
import { QuizFormContainer } from "@containers/quizzes/QuizFormContainer";
import { dehydrate } from "@tanstack/react-query";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import { Quiz } from "@interfaces/quizzes";
import { queryClient } from "@libs/Tanstack";
import Cookies from "cookies";

const QuizPage: NextPage<InferGetServerSidePropsType<GetServerSideProps>> = ({
  userId,
}): ReactElement => {
  return <QuizFormContainer userId={userId} />;
};

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      const { req, res } = ctx;
      const cookies = new Cookies(req, res);
      const userId = cookies.get("user");
      
      return {
        props: {
          dehydratedState: dehydrate(queryClient),
          userId,
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
