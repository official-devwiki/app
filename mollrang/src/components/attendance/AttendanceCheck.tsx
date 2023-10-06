import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import {Icons} from '@components/common/icons/Icons';
import * as S from './style';


const days = ['월', '화', '수', '목', '금', '토', '일'];

export const AttendanceCheck = (): ReactElement => {
  return (
    <S.AttendanceLayout>
      <S.AttendanceTitleWrapper>
        <div className={'title'}>
          <S.IconWrapper>
            <Icons type={'check-red'} />
          </S.IconWrapper>
          <Typography variant={'body2'} weight={'bold'} color={'textDefault'}>
            출석 체크
          </Typography>
        </div>
      </S.AttendanceTitleWrapper>
      <S.WeekDayList>
        {days.map((day, index) => {
          return (
            <S.Days key={index} className={index === 3 && 'active'}>
              <Typography as={'span'} variant={'body2'} weight={'bold'}>
                {day}
              </Typography>
            </S.Days>
          );
        })}
      </S.WeekDayList>
    </S.AttendanceLayout>
  );
};
