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
import axios from "axios";
import {responseDataConvert} from "@utils/convert";
import {useAuth} from "@providers/authProvider";
import {getUserHistory} from "@services/apis/users";

const initialState: QuizFormState = {
  userId: '',
  count: 0,
  hint: [],
  isCorrected: false,
};

const QuizPage: NextPage<InferGetServerSidePropsType<GetServerSideProps>> = (): ReactElement => {
  const {userInfo} = useAuth();
  const [quizHistory, setQuizHistory] = useState<QuizFormState[]>([initialState]);

  const getQuizHistory = async () => {
    const data = await getUserHistory(userInfo?.id);
    if (data.success) {
      if (data.result.data && data.result.data.length === 0) {
        initialState.userId = userInfo?.id;
        setQuizHistory([initialState])
      } else {
        const dataConvert = responseDataConvert<QuizFormState[]>(data);
        setQuizHistory([...dataConvert]);
      }
    } else {
      initialState.userId = userInfo?.id;
      setQuizHistory([initialState]);
    }
  }

  useEffect(() => {
    getQuizHistory();
  }, [])

  return <QuizFormContainer quizHistory={quizHistory}/>;
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
