import {useQuery} from "@tanstack/react-query";
import {getMyAnswersRatio} from "@apis/ratio";
import {QueryKeys} from "@services/keys/queryKeys";

/**
 * @description: 나의 정답률 구하기
 * @param {string} uuid - 사용자 부여 id
 */
export const useGetMyAnswersQuery = (uuid: string) => {
  const result = useQuery({
    queryKey: [QueryKeys.Ratio.getMyAnswers],
    queryFn: () => getMyAnswersRatio(uuid)
  });
  return result;
}