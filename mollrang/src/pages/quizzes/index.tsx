import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ReactElement } from "react";
import { QuizFormContainer } from "@containers/quizzes/QuizFormContainer";

const QuizPage: NextPage<
  InferGetServerSidePropsType<GetServerSideProps>
> = (): ReactElement => {
  return <QuizFormContainer />;
};

export default QuizPage;
