import {axiosInstance} from '@libs/Axios';

export const getMyAnswersRatio = async (uuid: string) => {
  try {
    const {data} = await axiosInstance.get(`/ratio/answers/${uuid}`);
    return data;
  } catch (e) {
    throw e;
  }
};
