import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@services/keys/queryKeys';
import {getRandomQuiz, getTodayQuizzes} from '@services/apis/quizzes';
import {Quiz} from "@interfaces/quizzes";

export const useTodayQuizzesQuery = (): {isLoading: boolean, quiz: Quiz} => {
  let payload: Quiz = {
    answerLength: 0,
    prefixWord: '',
    suffixWord: '',
    question: '',
  };

  const {data = [], isLoading} = useQuery({
    queryKey: [QueryKeys.Quizzes.getTodayQuizzes],
    queryFn: () => getTodayQuizzes(),
  });

  if (data.length > 0) {
    const {result} = data[0];
    const {data: quizInfo} = result;
    payload = quizInfo;
  }

  return {
    isLoading,
    quiz: payload,
  };
};

/**
 * @description: 피식 :) 오늘의 랜덤 퀴즈
 */
export const useTodayRandomQuizzesQuery = (): {isLoading: boolean, quiz: Quiz} => {
  let payload: Quiz = {
    answerLength: 0,
    prefixWord: '',
    suffixWord: '',
    question: '',
  };

  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Quizzes.getRandomQuizzes],
    queryFn: () => getRandomQuiz(),
  });

  if (data) {
    const {result} = data;
    const {data: quizInfo} = result;
    payload = quizInfo;
  }

  return {
    isLoading,
    quiz: payload,
  };
};
