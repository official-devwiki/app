import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import styled from 'styled-components';
import {PieChart} from '@components/chart/PieChart';
import {PieChartIcon} from "@components/common/icons/PieChartIcon";
import {CheckSquareIcon} from "@components/common/icons/CheckSquareIcon";

const IntegratedStatisticsLayout = styled.div`
  width: 100%;
  padding: 0 1em;
  height: auto;
  min-height: 600px;
`;

const StatisticsItemContainer = styled.div`
  border-radius: 10px;
  min-width: 315px;
  width: 100%;
  height: 145px;
  background-color: var(--primary_opacity);
  margin: 20px auto;
`;

const StatisticsItemLists = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StatisticsItems = styled.li`
  display: flex;
  justify-content: space-between;
`;
const StatisticsSection1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(240,240,240, 0.7);
  border-radius: 10px 0 0 10px;
  width: 45%;
  height: 86px;
  padding: 1em;
`;
const StatisticsSection2 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(240,240,240, 0.7);
  border-radius: 0 10px 10px 0;
  width: 45%;
  height: 86px;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  
  .mr-10 {
    margin-right: 10px;
  }
`;

export const IntegratedStatistics = (): ReactElement => {

  return (
    <IntegratedStatisticsLayout>
      <FlexBox>
        <CheckSquareIcon className={'mr-10'} />
        <Typography $color={'textDefault'} $variant={'body1'} $weight={'bold'}>나의 정답률</Typography>
      </FlexBox>
      <hr />
      <StatisticsItemContainer>
        <StatisticsItemLists>
          <StatisticsSection1>
            <StatisticsItems>
              <Typography $color={'textDefault'} $variant={'body1'} $weight={'medium'}>참여횟수</Typography>
              <Typography $color={'textPrimary'} $variant={'body2'} $weight={'medium'}>1 회</Typography>
            </StatisticsItems>
            <StatisticsItems>
              <Typography $color={'textDefault'} $variant={'body1'} $weight={'medium'}>최근 연속 정답</Typography>
              <Typography $color={'textPrimary'} $variant={'body2'} $weight={'medium'}>1 번</Typography>
            </StatisticsItems>

            <StatisticsItems>
              <Typography $color={'textDefault'} $variant={'body1'} $weight={'medium'}>최근 연속 정답</Typography>
              <Typography $color={'textPrimary'} $variant={'body2'} $weight={'medium'}>1 번</Typography>
            </StatisticsItems>
          </StatisticsSection1>
          <StatisticsSection2>
            <Typography $color={'textDefault'} $variant={'body1'} $weight={'medium'}>정답률</Typography>
            <Typography $color={'textPrimary'} $variant={'body2'} $weight={'medium'}>12 %</Typography>
          </StatisticsSection2>
        </StatisticsItemLists>
      </StatisticsItemContainer>
      <FlexBox>
        <PieChartIcon className={'mr-10'} />
        <Typography $color={'textDefault'} $variant={'body1'} $weight={'bold'}>도전 분포</Typography>
      </FlexBox>
      <hr />
      <PieChart />
    </IntegratedStatisticsLayout>
  );
};