import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@services/keys/queryKeys';
import {getRandomQuiz, getTodayQuizzes} from '@services/apis/quizzes';

export const useTodayQuizzesQuery = <T>(): {isLoading: boolean, data: T} => {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Quizzes.getTodayQuizzes],
    queryFn: () => getTodayQuizzes<T>(),
  });

  return {
    isLoading,
    data,
  };
};

/**
 * @description: 피식 :) 오늘의 랜덤 퀴즈
 */
export const useTodayRandomQuizzesQuery = <T>(): {isLoading: boolean, data: T} => {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Quizzes.getRandomQuizzes],
    queryFn: () => getRandomQuiz<T>(),
  });
  return {
    isLoading,
    data,
  };
};
