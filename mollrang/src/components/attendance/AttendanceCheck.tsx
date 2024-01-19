import { ReactElement } from "react";
import { Typography } from "@components/common/Typography";
import { Icons } from "@components/common/icons/Icons";
import * as S from "./style";
import { useUserAttendanceQuery } from "@services/queries/usersQuery";

export interface Attendance {
  day: string;
  attendance: boolean;
}

export const AttendanceCheck = ({
  userId,
}: {
  userId: string;
}): ReactElement => {
  const { isLoading, data } = useUserAttendanceQuery(userId);

  return (
    <S.AttendanceLayout>
      <S.AttendanceTitleWrapper>
        <div className={"title"}>
          <div className={"attendance_title"}>
            <S.IconWrapper>
              <Icons type={"check-red"} />
            </S.IconWrapper>
            <Typography
              $variant={"body2"}
              $weight={"medium"}
              $color={"textDefault"}
            >
              출석 체크
            </Typography>
          </div>
          <Typography
            $variant={"caption"}
            $weight={"medium"}
            $color={"textGray500"}
            $fontFamily={"Noto Sans KR"}
          >
            매일 한 문제, 퀴즈를 풀고 출석 도장을 받아보세요!
          </Typography>
        </div>
      </S.AttendanceTitleWrapper>
      <S.WeekDayList>
        {data &&
          data.map((value, index) => {
            return (
              <S.Days key={index} className={value.attendance && "active"}>
                <Typography as={"span"} $variant={"body2"}>
                  {value.day}
                </Typography>
              </S.Days>
            );
          })}
      </S.WeekDayList>
    </S.AttendanceLayout>
  );
};
