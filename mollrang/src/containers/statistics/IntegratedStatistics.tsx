import { ReactElement } from "react";
import { Typography } from "@components/common/Typography";
import styled from "styled-components";
import { CheckSquareIcon } from "@components/common/icons/CheckSquareIcon";
import { useGetMyDistributionQuery } from "@services/queries/statisticsQuery";
import { TiChartPie } from "react-icons/ti";

const IntegratedStatisticsLayout = styled.div`
  width: 100%;
  padding: 0 1em;
  height: 550px;
  overflow-y: auto;
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
  background-color: rgba(240, 240, 240, 0.7);
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
  background-color: rgba(240, 240, 240, 0.7);
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

interface ChallengeData {
  challenge1: number;
  challenge2: number;
  challenge3: number;
  challenge4: number;
  challenge5: number;
}

export const IntegratedStatistics = (): ReactElement => {
  const { isLoading, data } = useGetMyDistributionQuery<ChallengeData>();

  return (
    <IntegratedStatisticsLayout>
      <FlexBox>
        <CheckSquareIcon className={"mr-10"} />
        <Typography $color={"textDefault"} $variant={"body1"} $weight={"bold"}>
          나의 정답률
        </Typography>
      </FlexBox>
      <hr />
      <StatisticsItemContainer>
        <StatisticsItemLists>
          <StatisticsSection1>
            <StatisticsItems>
              <Typography
                $color={"textDefault"}
                $variant={"body1"}
                $weight={"medium"}
              >
                참여횟수
              </Typography>
              <Typography
                $color={"textPrimary"}
                $variant={"body2"}
                $weight={"medium"}
              >
                1 회
              </Typography>
            </StatisticsItems>
            <StatisticsItems>
              <Typography
                $color={"textDefault"}
                $variant={"body1"}
                $weight={"medium"}
              >
                최근 연속 정답
              </Typography>
              <Typography
                $color={"textPrimary"}
                $variant={"body2"}
                $weight={"medium"}
              >
                1 번
              </Typography>
            </StatisticsItems>

            <StatisticsItems>
              <Typography
                $color={"textDefault"}
                $variant={"body1"}
                $weight={"medium"}
              >
                최근 연속 정답
              </Typography>
              <Typography
                $color={"textPrimary"}
                $variant={"body2"}
                $weight={"medium"}
              >
                1 번
              </Typography>
            </StatisticsItems>
          </StatisticsSection1>
          <StatisticsSection2>
            <Typography
              $color={"textDefault"}
              $variant={"body1"}
              $weight={"medium"}
            >
              정답률
            </Typography>
            <Typography
              $color={"textPrimary"}
              $variant={"body2"}
              $weight={"medium"}
            >
              12 %
            </Typography>
          </StatisticsSection2>
        </StatisticsItemLists>
      </StatisticsItemContainer>
      <FlexBox>
        <TiChartPie color={'var(--primary)'} size={28} className={'mr-10'} />
        <Typography $color={"textDefault"} $variant={"body1"} $weight={"bold"}>
          도전 분포
        </Typography>
      </FlexBox>
      <hr />
    </IntegratedStatisticsLayout>
  );
};
