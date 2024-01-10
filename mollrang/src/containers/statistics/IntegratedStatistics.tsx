import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { Typography } from "@components/common/Typography";
import styled from "styled-components";
import { CheckSquareIcon } from "@components/common/icons/CheckSquareIcon";
import {
  useContinuousCorrectQuery,
  useGetMyAnswersQuery,
  useGetMyDistributionQuery,
  useMostContinuousCountQuery,
  useMyTotalChallengeQuery,
} from "@services/queries/statisticsQuery";
import { TiChartPie } from "react-icons/ti";
import { PieChartProps } from "@components/charts/PieChart";
import { useAuth } from "../../providers/authProvider";
import { SpinnerUi } from "@components/ui/spinner/SpinnerUi";

const PieChart = dynamic(() => import("@components/charts/PieChart"), {
  ssr: false,
});

const IntegratedStatisticsLayout = styled.div`
  width: 100%;
  padding: 0 1em;
  height: 550px;
  overflow-y: auto;

  ${({ theme }) => theme.scroll.theme()}
`;

const StatisticsItemContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: auto;
  margin: 20px auto;
`;

const StatisticsItemLists = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70%;
`;

const StatisticsItems = styled.li`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    .word {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
  }
`;
const StatisticsSection1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 86px;
`;
const StatisticsSection2 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ededed;
  border-radius: 50%;
  width: 40%;
  height: 86px;

  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.4);

  .answer_ratio:nth-child(1) {
    font-size: 1.4em;
  }

  .answer_ratio:nth-child(2) {
    font-size: 1.8em;
  }
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;

  .mr-10 {
    margin-right: 10px;
  }
`;

export interface ChallengeData {
  id: string;
  label: string;
  value: number;
  color: string;
}

export const IntegratedStatistics = (): ReactElement => {
  const { userId } = useAuth();
  const distributionData = useGetMyDistributionQuery(userId);
  const myAnswerRatioData = useGetMyAnswersQuery(userId);
  const totalChallengeData = useMyTotalChallengeQuery(userId);
  const continuousCorrectData = useContinuousCorrectQuery(userId);
  const mostCorrectData = useMostContinuousCountQuery(userId);

  if (
    mostCorrectData.isLoading &&
    continuousCorrectData.isLoading &&
    totalChallengeData.isLoading &&
    distributionData.isLoading &&
    myAnswerRatioData.isLoading
  )
    return <SpinnerUi />;

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
                $variant={"body2"}
                $weight={"medium"}
              >
                참여횟수
              </Typography>
              <div>
                <Typography
                  $color={"textPrimary"}
                  $variant={"body2"}
                  $weight={"medium"}
                >
                  {totalChallengeData.data && totalChallengeData.data.total}
                </Typography>

                <Typography
                  as={"span"}
                  $color={"textDefault"}
                  $variant={"caption"}
                  $weight={"regular"}
                  className={"word"}
                >
                  회
                </Typography>
              </div>
            </StatisticsItems>
            <StatisticsItems>
              <Typography
                $color={"textDefault"}
                $variant={"body2"}
                $weight={"medium"}
              >
                최다 연속 정답
              </Typography>
              <div>
                <Typography
                  as={"span"}
                  $color={"textDefault"}
                  $variant={"caption"}
                  $weight={"regular"}
                  className={"word"}
                >
                  최다
                </Typography>
                <Typography
                  $color={"textPrimary"}
                  $variant={"body2"}
                  $weight={"bold"}
                >
                  {mostCorrectData.data && mostCorrectData.data.most}
                </Typography>
                <Typography
                  as={"span"}
                  $color={"textDefault"}
                  $variant={"caption"}
                  $weight={"regular"}
                  className={"word"}
                >
                  회
                </Typography>
              </div>
            </StatisticsItems>

            <StatisticsItems>
              <Typography
                $color={"textDefault"}
                $variant={"body2"}
                $weight={"medium"}
              >
                최근 연속 정답
              </Typography>
              <div>
                <Typography
                  $color={"textPrimary"}
                  $variant={"body2"}
                  $weight={"medium"}
                >
                  {continuousCorrectData.data &&
                    continuousCorrectData.data.continuous}
                </Typography>
                <Typography
                  as={"span"}
                  $color={"textDefault"}
                  $variant={"caption"}
                  $weight={"regular"}
                  className={"word"}
                >
                  번
                </Typography>
              </div>
            </StatisticsItems>
          </StatisticsSection1>
          <StatisticsSection2>
            <Typography
              $color={"textDefault"}
              $variant={"body1"}
              $weight={"medium"}
              className={"answer_ratio"}
            >
              정답률
            </Typography>
            <Typography
              $color={"textPrimary"}
              $variant={"body1"}
              $weight={"bold"}
              className={"answer_ratio"}
            >
              {myAnswerRatioData.data && myAnswerRatioData.data.corrected}
            </Typography>
          </StatisticsSection2>
        </StatisticsItemLists>
      </StatisticsItemContainer>
      <FlexBox>
        <TiChartPie color={"var(--primary)"} size={28} className={"mr-10"} />
        <Typography $color={"textDefault"} $variant={"body1"} $weight={"bold"}>
          도전 분포
        </Typography>
      </FlexBox>
      <hr />
      {distributionData.data && <PieChart data={distributionData.data} />}
    </IntegratedStatisticsLayout>
  );
};
