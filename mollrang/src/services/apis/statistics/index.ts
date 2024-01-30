import { axiosInstance } from "@libs/Axios";
import { Domain } from "@services/apis/url";
import { responseDataConvert } from "@utils/convert";
import { ChallengeData } from "@interfaces/statistics";

const statistics = Domain.Statistics;

/**
 *
 * @returns
 * @description 나의 정답률 조회
 */
export const getMyAnswersRatio = async (
  userId: string,
): Promise<{ corrected: string }> => {
  try {
    const url = `/${statistics}/corrected/${userId}`;
    const { data } = await axiosInstance.get(url);
    if (data.success) return responseDataConvert<{ corrected: string }>(data);
    return { corrected: "0 %" };
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @description 도전 분포 조회
 */
export const getChallengeDistribution = async (
  userId: string,
): Promise<ChallengeData[]> => {
  try {
    const url = `/${statistics}/distribution/${userId}`;
    const { data } = await axiosInstance.get(url);
    if (data.success) return responseDataConvert<ChallengeData[]>(data);
    return [];
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @description 전체 도전 횟수 조회
 */
export const getChallengeCount = async (
  userId: string,
): Promise<{ total: number }> => {
  try {
    const url = `/${statistics}/total/${userId}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<{ total: number }>(data);
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @description 연속 정답 횟수 조회
 */
export const getContinuousCorrectCount = async (
  userId: string,
): Promise<{ continuous: number }> => {
  try {
    const url = `/${statistics}/continuous/${userId}`;
    const { data } = await axiosInstance.get(url);
    if (data.success) return responseDataConvert<{ continuous: number }>(data);
    return { continuous: 0 };
  } catch (e) {
    throw e;
  }
};

/**
 * @description: 최다 연속 정답 횟수 조회
 */
export const getMostContinuousCorrectCount = async (
  userId: string,
): Promise<{ most: number }> => {
  try {
    const url = `/${statistics}/most/${userId}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<{ most: number }>(data);
  } catch (e) {
    throw e;
  }
};

export const getCorrectedAnswerCount = async (userId: string) => {
  const url = `/${statistics}/corrected/count/${userId}`;
  const { data } = await axiosInstance.get(url);
  return responseDataConvert<{ correctedCount: number }>(data);
};
