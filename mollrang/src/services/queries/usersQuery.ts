import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@services/keys/queryKeys";
import {getUserAttendance} from "@services/apis/users";
import {Attendance} from "@components/attendance/AttendanceCheck";

export const useUserAttendanceQuery = (userId: string): {isLoading: boolean, data: Attendance[]} => {
  console.log(userId)
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Users.getAttendance],
    queryFn: () => getUserAttendance(userId),
  });
  return {isLoading, data};
}