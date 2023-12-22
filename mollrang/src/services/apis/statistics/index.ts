import { axiosInstance } from "@libs/Axios";
import { Domain } from "@services/apis/url";
import { responseDataConvert } from "@utils/convert";
import {ChallengeData} from "@containers/statistics/IntegratedStatistics";

const statistics = Domain.Statistics;

/**
 *
 * @returns
 * @description 나의 정답률 조회
 */
export const getMyAnswersRatio = async (userId: string): Promise<{corrected: number}> => {
  try {
    const url = `/${statistics}/corrected/${userId}`;
    const { data } = await axiosInstance.get(url);
    if (data.result) {
      return responseDataConvert<{corrected: number}>(data)}
    return { corrected: 0 }
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @description 도전 분포 조회
 */
export const getChallengeDistribution = async (userId: string): Promise<ChallengeData> => {
  try {
    const url = `/${statistics}/distribution/${userId}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<ChallengeData>(data);
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @description 전체 도전 횟수 조회
 */
export const getChallengeCount = async <T>(userId: string): Promise<T> => {
  try {
    const url = `/${statistics}/total/${userId}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<T>(data);
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @description 연속 정답 횟수 조회
 */
export const getContinuousCorrectCount = async (userId: string): Promise<{continuous: number}> => {
  try {
    const url = `/${statistics}/continuous/${userId}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<{continuous: number}>(data);
  } catch (e) {
    throw e;
  }
};

/**
 * @description: 최다 연속 정답 횟수 조회
 */
export const getMostContinuousCorrectCount = async <T>(userId: string): Promise<T> => {
  try {
    const url = `/${statistics}/most/${userId}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<T>(data);
  } catch (e) {
    throw e;
  }
};
