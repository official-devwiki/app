import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@services/keys/queryKeys";
import {getTodayQuizzes} from "@apis/quizzes";

interface Quiz {
  answerLength: number;
  prefixWord: string;
  suffixWord: string;
  question: string;
}

export const useTodayQuizzesQuery = () => {
  let payload: Quiz = {
    answerLength: 0,
    prefixWord: '',
    suffixWord: '',
    question: '',
  }

  const {data = [], isLoading} = useQuery({
    queryKey: [QueryKeys.Quizzes.getTodayQuizzes],
    queryFn: () => getTodayQuizzes()
  });
  console.log(data);

  if (data.length > 0) {
    const { result } = data[0];
    const {data: quizInfo} = result;
    payload = quizInfo;
  }

  return {
    isLoading,
    quiz: payload
  }
}