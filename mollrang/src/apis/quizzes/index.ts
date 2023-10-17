import { axiosInstance } from "@libs/Axios";
import { Domain, Url } from "@apis/url";

const domain = Domain.Quiz;

export const getTodayQuizzes = async () => {
  try {
    const url = `/${domain}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (e) {
    throw e;
  }
};
