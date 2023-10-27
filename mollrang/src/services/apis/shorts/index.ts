import { axiosInstance } from "@libs/Axios";
import { Url } from "@services/apis/url";

export const getTodayShorts = async () => {
  try {
    const { data } = await axiosInstance.get(Url.Shorts.findOneShorts);
    return data;
  } catch (e) {
    throw e;
  }
};
