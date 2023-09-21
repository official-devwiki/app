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
          <Typography as={'span'} variant={'body2'} weight={'medium'} color={'default'}>
            출석 체크
          </Typography>
        </div>
        <div className={'consecutive_days'}>
          <Typography as={'span'} variant={'caption'} color={'sub_text'}>
            연속 출석일
          </Typography>
          <Typography as={'span'} variant={'caption'} weight={'bold'} color={'default'}>
            1 일
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
