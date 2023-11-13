import {GetServerSideProps, NextPage} from "next";
import {ReactElement} from "react";
import { HomeContainer } from "@containers/home";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {QueryKeys} from "@services/keys/queryKeys";
import {getUserAttendance} from "@services/apis/users";
import {Attendance} from "@components/attendance/AttendanceCheck";
import {getRandomQuiz} from "@services/apis/quizzes";
import {Quiz} from "@interfaces/quizzes";
import {getContinuousCorrectCount, getMyAnswersRatio} from "@services/apis/statistics";
import withGetServerSideProps from "@utils/withGetServerSideProps";

const HomePage: NextPage = (): ReactElement => {
  return <HomeContainer />;
};

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      const queryClient = new QueryClient();
      await queryClient.prefetchQuery([QueryKeys.Users.getAttendance], getUserAttendance<Attendance[]>);
      await queryClient.prefetchQuery([QueryKeys.Quizzes.getRandomQuizzes], getRandomQuiz<Quiz>);
      await queryClient.prefetchQuery([QueryKeys.Statistics.getMyAnswers], getMyAnswersRatio<{corrected: number}>);
      await queryClient.prefetchQuery([QueryKeys.Statistics.getContinuousCorrectCount], getContinuousCorrectCount<{continuous: number}>);
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

export default HomePage;
