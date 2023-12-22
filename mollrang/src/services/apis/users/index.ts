import {axiosInstance} from "@libs/Axios";
import {Domain} from "@services/apis/url";
import {responseDataConvert} from "@utils/convert";
import {ResponseData} from "@interfaces/quizzes";
import {Attendance} from "@components/attendance/AttendanceCheck";

const users = Domain.Users;

export const getUserAttendance = async (userId: string): Promise<Attendance[]> => {
  try {
    const url = `/${users}/attendance/${userId}`;
    const { data } = await axiosInstance.get<ResponseData<Attendance[]>>(url);
    return responseDataConvert<Attendance[]>(data);
  } catch (e) {
    throw e;
  }
}