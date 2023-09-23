import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import styled from 'styled-components';

const IntegratedStatisticsLayout = styled.div`
  width: 100%;
  padding: 0 1em;
`;

export const IntegratedStatistics = (): ReactElement => {
  return (
    <IntegratedStatisticsLayout>
      <div>
        <Typography>참여횟수</Typography>
        <Typography>1 회</Typography>
      </div>
      <div>
        <Typography>정답률</Typography>
        <Typography>12 %</Typography>
      </div>

      <div>
        <Typography>최근 연속 정답</Typography>
        <Typography>1 번</Typography>
      </div>

      <div>
        <Typography>최근 연속 정답</Typography>
        <Typography>1 번</Typography>
      </div>

      <div>
        <Typography>도전 분포</Typography>
        <ul>
          <li>
            <Typography>1 번째 성공</Typography>
            <Typography>1 번</Typography>
          </li>
          <li>
            <Typography>2 번째 성공</Typography>
            <Typography>1 번</Typography>
          </li>
          <li>
            <Typography>3 번째 성공</Typography>
            <Typography>1 번</Typography>
          </li>
          <li>
            <Typography>4 번째 성공</Typography>
            <Typography>1 번</Typography>
          </li>
          <li>
            <Typography>5 번째 성공</Typography>
            <Typography>1 번</Typography>
          </li>
        </ul>
      </div>

    </IntegratedStatisticsLayout>
  );
};
