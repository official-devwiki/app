import {axiosInstance} from '@libs/Axios';

export const getTodayShorts = async (): Promise<void> => {
  try {
    const {data} = await axiosInstance.get('/shorts');
    return data;
  } catch (e) {
    throw e;
  }
};
