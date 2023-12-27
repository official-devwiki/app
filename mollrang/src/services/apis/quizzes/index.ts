import {axiosInstance} from "@libs/Axios";
import {Domain} from "@services/apis/url";
import {Quiz, ResponseData} from "@interfaces/quizzes";
import {responseDataConvert} from "@utils/convert";
import {QuizSubmitData} from "@services/mutations/quizzesMutation";

const quizzes = Domain.Quiz;

/**
 * @description 퀴즈 가져오기
 */
export const getTodayQuizzes = async (): Promise<Quiz> => {
  try {
    const url = `/${quizzes}`;
    const {data} = await axiosInstance.get<ResponseData<Quiz>>(url);
    return responseDataConvert<Quiz>(data);
  } catch (e) {
    throw e;
  }
};

/**
 * @param body
 * @description 퀴즈 제출하기
 */
export const quizSolutionSubmit = async (
  body: QuizSubmitData,
): Promise<any> => {
  try {
    const url = `/${quizzes}`;
    const {data} = await axiosInstance.post(url, body);
    return data;
  } catch (e) {
    throw e;
  }
};
