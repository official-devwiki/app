import {axiosInstance} from "@libs/Axios";
import {Domain} from "@services/apis/url";
import {responseDataConvert} from "@utils/convert";
import {ResponseData} from "@interfaces/quizzes";
import {Attendance} from "@components/attendance/AttendanceCheck";
import axios from "axios";

const users = Domain.Users;

export const getUserAttendance = async (userId: string): Promise<Attendance[]> => {
  try {
    const url = `/${users}/attendance/${userId}`;
    const {data} = await axiosInstance.get<ResponseData<Attendance[]>>(url);
    return responseDataConvert<Attendance[]>(data);
  } catch (e) {
    throw e;
  }
}

export const registUserIdApi = async (userId: string): Promise<boolean> => {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const {data} = await axios.post<ResponseData<any>>(url, {userId});
    return responseDataConvert<boolean>(data);
  } catch (e) {
    console.log(e)
    throw e;
  }
}
