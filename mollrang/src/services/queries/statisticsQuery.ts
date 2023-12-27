import { useQuery } from "@tanstack/react-query";
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
export const useGetMyAnswersQuery = (userId: string): { isLoading: boolean; data: { corrected: number } } => {
  try {
    const {data, isLoading} = useQuery<{ corrected: number }, Error, { corrected: number }, any>({
      queryKey: [QueryKeys.Statistics.getMyAnswers],
      queryFn: () => getMyAnswersRatio(userId),
    });

    return {
      isLoading,
      data,
    }
  } catch (e) {
    console.log(e);
  }
};

/**
 * @description 연속 정답 회수 구하기
 */
export const useContinuousCorrectQuery = (userId: string): {
  isLoading: boolean;
  data: {continuous: number};
} => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.Statistics.getContinuousCorrectCount],
    queryFn: () => getContinuousCorrectCount(userId),
  });
  return {
    isLoading,
    data,
  };
};

/**
 * @description: 도전 분포 구하기
 */
export const useGetMyDistributionQuery = (userId: string): {
  isLoading: boolean;
  data: ChallengeData;
} => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.Statistics.getChallengeDistribution],
    queryFn: () => getChallengeDistribution(''),
  });
  return {
    isLoading,
    data,
  };
};

/**
 * @description 전체 도전 횟수 구하기
 */
export const useMyTotalChallengeQuery = <T>(): {
  isLoading: boolean;
  data: T;
} => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.Statistics.getChallengeCount],
    queryFn: () => getChallengeCount<T>(''),
  });
  return {
    isLoading,
    data,
  };
};

/**
 * @description 최다 연속 정답 횟수 구하기
 */
export const useMostContinuousCountQuery = <T>(): {
  isLoading: boolean;
  data: T;
} => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.Statistics.getMostContinuousCorrectCount],
    queryFn: () => getMostContinuousCorrectCount<T>(''),
  });
  return {
    isLoading,
    data,
  };
};
