import styled from 'styled-components';

export const AttendanceLayout = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 30px;
`;

export const AttendanceTitleWrapper = styled.h2`
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

export const IconWrapper = styled.div`
  transform: rotate(-10deg);
`;

export const WeekDayList = styled.ul`
  display: flex;
  margin-top: 20px;
`;

export const Days = styled.li`
  border: 1px solid var(--day_circle);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: var(--day_bg);

  &.active {
    background-color: var(--day_bg_active);
    border-color: var(--day_border_active);

    span {
      color: var(--day_text_active);
    }
  }

  span {
    color: #CACACA;
  }
`;
