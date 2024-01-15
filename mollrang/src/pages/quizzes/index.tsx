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

// export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
//   async (ctx) => {
//     try {
//
//       return {
//         props: {
//           dehydratedState: dehydrate(queryClient),
//         },
//       };
//     } catch (e) {
//       console.log(e);
//       return {
//         props: {},
//       };
//     }
//   },
// );

export default QuizPage;
