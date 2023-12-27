import {GetServerSideProps, NextPage} from "next";
import {ReactElement} from "react";
import { HomeContainer } from "@containers/home";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {QueryKeys} from "@services/keys/queryKeys";
import {getUserAttendance} from "@services/apis/users";
import {getTodayQuizzes} from "@services/apis/quizzes";
import {getContinuousCorrectCount, getMyAnswersRatio} from "@services/apis/statistics";
import withGetServerSideProps from "@utils/withGetServerSideProps";
import Cookies from "cookies";
import {queryClient} from "@libs/Tanstack";

const HomePage: NextPage = (): ReactElement => {
  return <HomeContainer />;
};

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (ctx) => {
    try {
      const {req, res} = ctx;
      const cookies = new Cookies(req, res);
      const userId = cookies.get("user");
      if (userId) {
        // await queryClient.prefetchQuery([QueryKeys.Users.getAttendance], () => getUserAttendance(userId));
        // await queryClient.prefetchQuery([QueryKeys.Quizzes.getRandomQuizzes], getTodayQuizzes);
        // await queryClient.prefetchQuery([QueryKeys.Statistics.getMyAnswers], () => getMyAnswersRatio(userId));
        // await queryClient.prefetchQuery([QueryKeys.Statistics.getContinuousCorrectCount], () => getContinuousCorrectCount(userId));
      }
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
