import {axiosInstance} from "@libs/Axios";
import {Domain, Url} from "@services/apis/url";
import {responseDataConvert} from "@utils/convert";
import {ResponseData} from "@interfaces/quizzes";

const domain = Domain.Users;

export const getUserAttendance = async <T>(): Promise<T> => {
  try {
    const url = `/${domain}/${Url.Users.attendance}`;
    const { data } = await axiosInstance.get<ResponseData<T>>(url);
    return responseDataConvert<T>(data);
  } catch (e) {
    throw e;
  }
}