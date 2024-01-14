import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import {ReactElement, useEffect, useState} from "react";
import {
  QuizFormContainer,
  QuizFormState,
} from "@containers/quizzes/QuizFormContainer";
import {responseDataConvert} from "@utils/convert";
import {useAuth} from "@providers/authProvider";
import {getUserHistory} from "@services/apis/users";
import {setQuizState} from "@store/slice/quizSlice";
import {useAppDispatch} from "@hooks/useRedux";

const initialState: QuizFormState = {
  userId: '',
  count: 0,
  hint: [],
  isCorrected: false,
};

const QuizPage: NextPage<InferGetServerSidePropsType<GetServerSideProps>> = (): ReactElement => {

  return <QuizFormContainer/>;
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
