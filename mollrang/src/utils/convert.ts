import {ResponseData} from "@interfaces/quizzes";

export type ResponseError = {
  success: boolean;
  code: number;
  result: {
    message: string;
  };
};
type ReturnErrorType = {
  message: string;
  result: false;
};

/**
 * @param payload
 * @description API 응답 데이터 변환
 */
export const responseDataConvert = <T>(
  payload: ResponseData<T>,
): T => {
  const {success} = payload;
  const {result} = payload;
  return result.data;
};

