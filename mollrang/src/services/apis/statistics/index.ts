import { axiosInstance } from "@libs/Axios";
import { Domain, Url } from "@services/apis/url";
import { responseDataConvert } from "@utils/convert";

const domain = Domain.Statistics;

/**
 *
 * @returns
 * @description 나의 정답률 조회
 */
export const getMyAnswersRatio = async <T>(): Promise<T> => {
  try {
    const url = `/${domain}/${Url.Statistics.myAnswerCorrectRatio}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<T>(data);
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @description 도전 분포 조회
 */
export const getChallengeDistribution = async <T>(): Promise<T> => {
  try {
    const url = `/${domain}/${Url.Statistics.quizChallengeCount}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<T>(data);
  } catch (e) {
    throw e;
  }
};

/**
 *
 * @description 전체 도전 횟수 조회
 */
export const getChallengeCount = async <T>(): Promise<T> => {
  try {
    const url = `/${domain}/${Url.Statistics.challengeCount}`;
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
export const getContinuousCorrectCount = async <T>(): Promise<T> => {
  try {
    const url = `/${domain}/${Url.Statistics.continuousCount}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<T>(data);
  } catch (e) {
    throw e;
  }
};

/**
 * @description: 최다 연속 정답 횟수 조회
 */
export const getMostContinuousCorrectCount = async <T>(): Promise<T> => {
  try {
    const url = `/${domain}/${Url.Statistics.mostContinuousCount}`;
    const { data } = await axiosInstance.get(url);
    return responseDataConvert<T>(data);
  } catch (e) {
    throw e;
  }
};
