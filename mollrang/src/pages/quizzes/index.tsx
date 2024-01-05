import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ReactElement } from "react";
import {
  QuizFormContainer,
  QuizFormState,
} from "@containers/quizzes/QuizFormContainer";
import { dehydrate } from "@tanstack/react-query";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import { queryClient } from "@libs/Tanstack";
import Cookies from "cookies";
import axios from "axios";
import { responseDataConvert } from "@utils/convert";

const QuizPage: NextPage<InferGetServerSidePropsType<GetServerSideProps>> = ({
  quizHistory,
}): ReactElement => {
  return <QuizFormContainer quizHistory={quizHistory} />;
};

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      const { req, res } = ctx;
      const cookies = new Cookies(req, res);
      const userId = cookies.get("user");
      const url = `https://api.mollrang.com/api/history/quizzes/${userId}`;
      const { data } = await axios.get(url);
      let quizHistory = [];
      if (!data.success) {
        quizHistory = [
          {
            userId,
            count: 0,
            hint: [],
          },
        ];
      } else {
        quizHistory = responseDataConvert<QuizFormState[]>(data);
      }
      return {
        props: {
          dehydratedState: dehydrate(queryClient),
          quizHistory,
        },
      };
    } catch (e) {
      console.log(e);
      return {
        props: {},
      };
    }
  },
);

export default QuizPage;
