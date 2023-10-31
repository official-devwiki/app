import { axiosInstance } from "@libs/Axios";
import { Domain, Url } from "@services/apis/url";
import { ResponseData } from "@interfaces/quizzes";
import { responseDataConvert } from "@utils/convert";

const domain = Domain.Quiz;

/**
 * @description 퀴즈 가져오기
 */
export const getTodayQuizzes = async<T>(): Promise<T> => {
  try {
    const url = `/${domain}`;
    const { data } = await axiosInstance.get<ResponseData<T>>(url);
    return responseDataConvert<T>(data);
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
export const getRandomQuiz = async<T>(): Promise<T> => {
  try {
    const url = `/${domain}/${Url.Quizzes.RandomQuiz}`;
    const { data } = await axiosInstance.get<ResponseData<T>>(url);
    return responseDataConvert<T>(data);
  } catch (e) {
    throw e;
  }
}