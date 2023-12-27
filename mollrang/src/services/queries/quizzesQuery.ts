import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@services/keys/queryKeys';
import {getTodayQuizzes} from '@services/apis/quizzes';
import {Quiz} from "@interfaces/quizzes";

export const useTodayQuizzesQuery = (): {isLoading: boolean, data: Quiz} => {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Quizzes.getTodayQuizzes],
    queryFn: () => getTodayQuizzes(),
  });

  return {
    isLoading,
    data,
  };
};
