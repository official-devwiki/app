import {useQuery} from '@tanstack/react-query';
import {getTodayShorts} from '@apis/shorts';
import {QueryKeys} from '../keys/queryKeys';

export const useTodayShortsQuery = () => {
  const result = useQuery({
    queryKey: [QueryKeys.Shorts],
    queryFn: () => getTodayShorts(),
  });
  return result;
};
