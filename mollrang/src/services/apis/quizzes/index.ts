import { axiosInstance } from "@libs/Axios";
import { Domain, Url } from "@services/apis/url";
import {Quiz, ResponseData} from "@interfaces/quizzes";

const domain = Domain.Quiz;

/**
 * @description 퀴즈 가져오기
 */
export const getTodayQuizzes = async () => {
  try {
    const url = `/${domain}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (e) {
    throw e;
  }
};

/**
 * @param body
 * @description 퀴즈 제출하기
 */
export const quizSolutionSubmit = async (
  body:  {count: number, answer: string},
): Promise<any> => {
  try {
    const url = `/${domain}`;
    const { data } = await axiosInstance.post(url, body);
    return data;
  } catch (e) {
    throw e;
  }
};

/**
 * @description 퀴즈 랜덤으로 가져오기
 */
export const getRandomQuiz = async (): Promise<ResponseData<Quiz>> => {
  try {
    const url = `/${domain}/${Url.Quizzes.RandomQuiz}`;
    const { data } = await axiosInstance.get(url);
    console.log(data)
    return data;
  } catch (e) {
    throw e;
  }
}