import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@services/keys/queryKeys";
import {
  getMyAnswersRatio,
  getContinuousCorrectCount,
  getMostContinuousCorrectCount,
  getChallengeDistribution,
  getChallengeCount,
  getCorrectedAnswerCount,
} from "@services/apis/statistics";
import { ChallengeData } from "@interfaces/statistics";

/**
 * @description: 나의 정답률 구하기
 */
export const useGetMyAnswersQuery = (userId: string) => {
  return useQuery(
    [QueryKeys.Statistics.getMyAnswers],
    () => getMyAnswersRatio(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
};

/**
 * @description 연속 정답 회수 구하기
 */
export const useContinuousCorrectQuery = (userId: string) => {
  return useQuery(
    [QueryKeys.Statistics.getContinuousCorrectCount],
    () => getContinuousCorrectCount(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
};

/**
 * @description: 도전 분포 구하기
 */
export const useGetMyDistributionQuery = (
  userId: string,
): {
  isLoading: boolean;
  data: ChallengeData[];
} => {
  return useQuery(
    [QueryKeys.Statistics.getChallengeDistribution],
    () => getChallengeDistribution(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
};

/**
 * @description 전체 도전 횟수 구하기
 */
export const useMyTotalChallengeQuery = (userId: string) => {
  return useQuery(
    [QueryKeys.Statistics.getChallengeCount],
    () => getChallengeCount(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
};

/**
 * @description 최다 연속 정답 횟수 구하기
 */
export const useMostContinuousCountQuery = (userId: string) => {
  return useQuery(
    [QueryKeys.Statistics.getMostContinuousCorrectCount],
    () => getMostContinuousCorrectCount(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
};

export const useGetAnswerCountQuery = (userId: string) => {
  return useQuery([QueryKeys.Statistics.getCorrectedAnswerCount], () =>
    getCorrectedAnswerCount(userId),
  );
};
