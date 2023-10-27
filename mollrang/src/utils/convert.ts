import {ResponseData} from "@interfaces/quizzes";

/**
 * @param payload
 * @description API 응답 데이터 변환
 */
export const responseDataConvert = <T>(payload: ResponseData<T>): T => {
  const {success} = payload;
  // API 호출 성공
  if (success) {
    const {result} = payload;
    return result.data;
  }
}