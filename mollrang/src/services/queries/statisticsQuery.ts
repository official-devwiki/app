import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@services/keys/queryKeys";
import { getMyAnswersRatio, getContinuousCorrectCount } from "@services/apis/statistics";

/**
 * @description: 나의 정답률 구하기
 */
export const useGetMyAnswersQuery =<T>(): {isLoading: boolean, data: T} => {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Statistics.getMyAnswers],
    queryFn: () => getMyAnswersRatio<T>(),
  });
  return {
    isLoading,
    data,
  };
};

/**
 * @description 연속 정답 회수 구하기
 */
export const useContinuousCorrectQuery =<T>(): {isLoading: boolean, data: T} => {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Statistics.getContinuousCorrectCount],
    queryFn: () => getContinuousCorrectCount<T>(),
  });
  return {
    isLoading,
    data,
  };
}
