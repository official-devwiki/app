import {axiosInstance} from '@libs/Axios';
import {Url} from "@apis/url";

export const getMyAnswersRatio = async (uuid: string) => {
  try {
    const {data} = await axiosInstance.get(`${Url.Statistics.myAnswerCorrectRatio}/${uuid}`);
    return data;
  } catch (e) {
    throw e;
  }
};
