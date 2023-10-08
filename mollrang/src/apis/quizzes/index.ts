import {axiosInstance} from "@libs/Axios";
import {Url} from "@apis/url";

export const getTodayQuizzes = async () => {
  try {
    const {data} = await axiosInstance.get(Url.Quizzes.findOneQuizzes);
    return data;
  } catch (e) {
    throw e;
  }
}