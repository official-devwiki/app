import {axiosInstance} from '@libs/Axios';
import {Domain, Url} from "@services/apis/url";
import {Quiz, ResponseData} from "@interfaces/quizzes";

const domain = Domain.Statistics;

/**
 * 
 * @param {string} userId
 * @returns 
 * @description 나의 정답률 조회
 */
export const getMyAnswersRatio = async (userId: string) => {
  try {
    const url = `/${domain}/${Url.Statistics.myAnswerCorrectRatio}/${userId}`;
    const {data} = await axiosInstance.get(url);
    return data;
  } catch (e) {
    throw e;
  }
};

/**
 * 
 * @param {string} userId 
 * @description 도전 분포 조회
 */
export const getChallengeDistribution = async (userId: string) => {
  try {
    const url = `/${domain}/${Url.Statistics.quizChallengeCount}/${userId}`;
    const {data} = await axiosInstance.get(url);
    return data;
  } catch (e) {
    throw e;
  }
}

/**
 * 
 * @param userId 
 * @description 전체 도전 횟수 조회
 */
export const getChallengeCount = async (userId: string) => {
  try {
    const url = `/${domain}/${Url.Statistics.challengeCount}/${userId}`;
    const {data} = await axiosInstance.get(url);
    return data;
  } catch (e) {
    throw e;
  }
}

/**
 * 
 * @param userId 
 * @description 연속 정답 횟수 조회
 */
export const getContinuousCorrectCount = async (userId: string) => {
  try {
    const url = `/${domain}/${Url.Statistics.continuousCount}/${userId}`;
    const {data} = await axiosInstance.get(url);
    return data;
  } catch (e) {
    throw e;
  }
}

export const getMostContinuousCorrectCount = async (userId: string) => {
  try {
    const url = `/${domain}/${Url.Statistics.mostContinuousCount}/${userId}`;
    const {data} = await axiosInstance.get(url);
    return data;
  } catch (e) {
    throw e;
  }
}