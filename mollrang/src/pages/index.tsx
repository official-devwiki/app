import { NextPage } from "next";
import { ReactElement } from "react";
import { HomeContainer } from "@containers/home";
import { queryClient } from "@libs/Tanstack";
import { dehydrate } from "@tanstack/react-query";
import { QueryKeys } from "@services/keys/queryKeys";
import { useTodayRandomQuizzesQuery } from "@services/queries/quizzesQuery";
import { Quiz } from "@interfaces/quizzes";
import {
  useContinuousCorrectQuery,
  useGetMyAnswersQuery,
} from "@services/queries/statisticsQuery";
import { useUserAttendanceQuery } from "@services/queries/usersQuery";
import { Attendance } from "@components/attendance/AttendanceCheck";

export interface HomePageProps {
  result: any;
}

const HomePage: NextPage<HomePageProps> = (props): ReactElement => {
  const { result } = props;
  return <HomeContainer homeData={result} />;
};

export default HomePage;

export const getServerSideProps = async () => {
  try {
    await queryClient.prefetchQuery([QueryKeys.Quizzes.getRandomQuizzes], () =>
      useTodayRandomQuizzesQuery<Quiz>(),
    );
    await queryClient.prefetchQuery([QueryKeys.Statistics.getMyAnswers], () =>
      useGetMyAnswersQuery<{ corrected: number }>(),
    );
    await queryClient.prefetchQuery(
      [QueryKeys.Statistics.getMostContinuousCorrectCount],
      () => useContinuousCorrectQuery<{ continuous: number }>(),
    );
    await queryClient.prefetchQuery([QueryKeys.Users.getAttendance], () =>
      useUserAttendanceQuery<Attendance[]>(),
    );
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {},
    };
  }
};
