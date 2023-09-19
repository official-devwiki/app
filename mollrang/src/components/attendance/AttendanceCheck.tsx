import {ReactElement} from 'react';
import styled from 'styled-components';
import {Typography} from '@components/common/Typography';
import {Icons} from '@components/common/icons/Icons';

const AttendanceLayout = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 30px;
`;

const AttendanceTitleWrapper = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    align-items: flex-end;
  }

  .consecutive_days {
    display: flex;

    span:nth-child(1) {
      margin-right: 6px;
    }

  }
`;

const IconWrapper = styled.div`
  transform: rotate(-10deg);
`;

const WeekDayList = styled.ul`
  display: flex;
  margin-top: 20px;
`;

const Days = styled.li`
  border: 1px solid #CACACA;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: #F4F4F4;

  &.active {
    background-color: #fff;
    border-color: var(--primary);

    span {
      color: var(--primary);
    }
  }

  span {
    color: #CACACA;
  }
`;

const days = ['월', '화', '수', '목', '금', '토', '일'];

export const AttendanceCheck = (): ReactElement => {
  return (
    <AttendanceLayout>
      <AttendanceTitleWrapper>
        <div className={'title'}>
          <IconWrapper>
            <Icons type={'check-red'} />
          </IconWrapper>
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
      </AttendanceTitleWrapper>
      <WeekDayList>
        {days.map((day, index) => {
          return (
            <Days key={index} className={index === 3 && 'active'}>
              <Typography as={'span'} variant={'body2'} weight={'bold'}>
                {day}
              </Typography>
            </Days>
          );
        })}
      </WeekDayList>

    </AttendanceLayout>
  );
};
