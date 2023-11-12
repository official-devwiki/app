import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import {Icons} from '@components/common/icons/Icons';
import * as S from './style';
import {useUserAttendanceQuery} from "@services/queries/usersQuery";

export interface Attendance {
  day: string;
  attendance: boolean;
}

export const AttendanceCheck = (): ReactElement => {
  const {isLoading, data} = useUserAttendanceQuery<Attendance[]>();

  return (
    <S.AttendanceLayout>
      <S.AttendanceTitleWrapper>
        <div className={'title'}>
          <S.IconWrapper>
            <Icons type={'check-red'} />
          </S.IconWrapper>
          <Typography $variant={'body2'} $weight={'bold'} $color={'textDefault'}>
            출석 체크
          </Typography>
        </div>
      </S.AttendanceTitleWrapper>
      <S.WeekDayList>
        {data && data.map((value, index) => {
          return (
            <S.Days key={index} className={value.attendance && 'active'}>
              <Typography as={'span'} $variant={'body2'} $weight={'bold'}>
                {value.day}
              </Typography>
            </S.Days>
          );
        })}
      </S.WeekDayList>
    </S.AttendanceLayout>
  );
};
