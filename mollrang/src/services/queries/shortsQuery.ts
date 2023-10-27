import {useQuery} from '@tanstack/react-query';
import {getTodayShorts} from '@services/apis/shorts';
import {QueryKeys} from '@services/keys/queryKeys';

/**
 * @description: 피식 :) 오늘의 랜덤 퀴즈
 */
export const useTodayShortsQuery = () => {
  const result = useQuery({
    queryKey: [QueryKeys.Shorts.getShorts],
    queryFn: () => getTodayShorts(),
  });
  return result;
};
