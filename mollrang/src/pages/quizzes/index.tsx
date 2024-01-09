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
import { v4 as uuid } from "uuid";
import { registUserIdApi } from "@services/apis/users";

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
      let quizHistory = [];

      const initialState: QuizFormState = {
        userId,
        count: 0,
        hint: [],
        isCorrected: false,
      };

      if (userId) {
        const url = `https://api.mollrang.com/api/history/quizzes/${userId}`;
        const { data } = await axios.get(url);
        if (data.success) {
          if (data.result.data && data.result.data.length === 0) {
            quizHistory = [initialState];
          } else {
            quizHistory = responseDataConvert<QuizFormState[]>(data);
          }
        } else {
          initialState.userId = userId;
          quizHistory = [initialState];
        }
      } else {
        const userId = uuid();
        const result = await registUserIdApi(userId);
        if (result) cookies.set("user", userId);
        initialState.userId = userId;
        quizHistory = [initialState];
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
