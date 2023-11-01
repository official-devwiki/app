import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@services/keys/queryKeys";
import {
  getMyAnswersRatio,
  getContinuousCorrectCount,
  getMostContinuousCorrectCount,
  getChallengeDistribution, getChallengeCount
} from "@services/apis/statistics";

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

/**
 * @description: 도전 분포 구하기
 */
export const useGetMyDistributionQuery =<T>(): {isLoading: boolean, data: T} => {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Statistics.getChallengeDistribution],
    queryFn: () => getChallengeDistribution<T>(),
  });
  return {
    isLoading,
    data,
  };
};

/**
 * @description 전체 도전 횟수 구하기
 */
export const useMyTotalChallengeQuery =<T>(): {isLoading: boolean, data: T} => {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Statistics.getChallengeCount],
    queryFn: () => getChallengeCount<T>(),
  });
  return {
    isLoading,
    data,
  };
}

/**
 * @description 최다 연속 정답 횟수 구하기
 */
export const useMostContinuousCountQuery =<T>(): {isLoading: boolean, data: T} => {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Statistics.getMostContinuousCorrectCount],
    queryFn: () => getMostContinuousCorrectCount<T>(),
  });
  return {
    isLoading,
    data,
  };
}