import {useQuery} from "@tanstack/react-query";
import {QueryKeyType, QueryKeys} from "@services/keys/queryKeys";
import {
  getMyAnswersRatio,
  getContinuousCorrectCount,
  getMostContinuousCorrectCount,
  getChallengeDistribution,
  getChallengeCount,
} from "@services/apis/statistics";
import {ChallengeData} from "@containers/statistics/IntegratedStatistics";

/**
 * @description: 나의 정답률 구하기
 */
export const useGetMyAnswersQuery = (
  userId: string,
): { isLoading: boolean; data: { corrected: string } } => {
  const {data, isLoading} = useQuery(
    [QueryKeys.Statistics.getMyAnswers],
    () => getMyAnswersRatio(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
  return {
    isLoading,
    data,
  };
};

/**
 * @description 연속 정답 회수 구하기
 */
export const useContinuousCorrectQuery = (
  userId: string,
) => {
  const {data, isLoading} = useQuery(
    [QueryKeys.Statistics.getContinuousCorrectCount],
    () => getContinuousCorrectCount(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
  return {
    isLoading,
    data,
  };
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
  const {data, isLoading} = useQuery(
    [QueryKeys.Statistics.getChallengeDistribution],
    () => getChallengeDistribution(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
  return {
    isLoading,
    data,
  };
};

/**
 * @description 전체 도전 횟수 구하기
 */
export const useMyTotalChallengeQuery = (userId: string) => {
  const {data, isLoading} = useQuery(
    [QueryKeys.Statistics.getChallengeCount],
    () => getChallengeCount(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
  return {
    isLoading,
    data,
  };
};

/**
 * @description 최다 연속 정답 횟수 구하기
 */
export const useMostContinuousCountQuery = (userId: string) => {
  const {data, isLoading} = useQuery(
    [QueryKeys.Statistics.getMostContinuousCorrectCount],
    () => getMostContinuousCorrectCount(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
  return {
    isLoading,
    data,
  };
};
