import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@services/keys/queryKeys";
import {getUserAttendance} from "@services/apis/users";

export const useUserAttendanceQuery = <T>(): {isLoading: boolean, data: T} => {
  const {data, isLoading} = useQuery({
    queryKey: [QueryKeys.Users.getAttendance],
    queryFn: () => getUserAttendance<T>(),
  });
  return {isLoading, data};
}