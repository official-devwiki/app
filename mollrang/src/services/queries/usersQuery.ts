import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@services/keys/queryKeys";
import {getUserAttendance} from "@services/apis/users";
import {Attendance} from "@components/attendance/AttendanceCheck";

export const useUserAttendanceQuery = (
  userId: string,
) => {
  const {data, isLoading} = useQuery(
    [QueryKeys.Users.getAttendance],
    () => getUserAttendance(userId),
    {
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  );
  return {isLoading, data};
};
