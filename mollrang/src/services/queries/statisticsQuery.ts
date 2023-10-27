import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@services/keys/queryKeys";
import { getMyAnswersRatio } from "@services/apis/statistics";

/**
 * @description: 나의 정답률 구하기
 * @param {string} uuid - 사용자 부여 id
 */
export const useGetMyAnswersQuery = (uuid: string) => {
  const result = useQuery({
    queryKey: [QueryKeys.Statistics.getMyAnswers],
    queryFn: () => getMyAnswersRatio(uuid),
  });
  return result;
};
