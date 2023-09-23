import {useQuery} from '@tanstack/react-query';
import {getTodayShorts} from '@apis/shorts';
import {QueryKeys} from '@services/keys/queryKeys';

export const useTodayShortsQuery = () => {
  const result = useQuery({
    queryKey: [QueryKeys.Shorts],
    queryFn: () => getTodayShorts(),
  });
  return result;
};
