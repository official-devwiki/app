import dynamic from "next/dynamic";
import {ReactElement} from "react";
import {Typography} from "@components/common/Typography";
import styled from "styled-components";
import {CheckSquareIcon} from "@components/common/icons/CheckSquareIcon";
import {
  useContinuousCorrectQuery,
  useGetMyAnswersQuery,
  useGetMyDistributionQuery,
  useMostContinuousCountQuery,
  useMyTotalChallengeQuery,
} from "@services/queries/statisticsQuery";
import {TiChartPie} from "react-icons/ti";
import {PieChartProps} from "@components/charts/PieChart";
import {useAuth} from "../../providers/authProvider";
import {SpinnerUi} from "@components/ui/spinner/SpinnerUi";

const PieChart = dynamic(() => import("@components/charts/PieChart"), {
  ssr: false,
});

const IntegratedStatisticsLayout = styled.div`
  width: 100%;
  padding: 0 1em;
  height: auto;
  overflow-y: auto;

  ${({theme}) => theme.scroll.theme()}
`;

const StatisticsItemContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: auto;
  margin-bottom: 1em;
`;

const StatisticsItemLists = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
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
  width: 100%;
  height: 86px;
`;
const StatisticsSection2 = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em auto 1.25em;

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
  const {userInfo} = useAuth();
  const distributionData = useGetMyDistributionQuery(userInfo?.id);
  const myAnswerRatioData = useGetMyAnswersQuery(userInfo?.id);
  const totalChallengeData = useMyTotalChallengeQuery(userInfo?.id);
  const continuousCorrectData = useContinuousCorrectQuery(userInfo?.id);
  const mostCorrectData = useMostContinuousCountQuery(userInfo?.id);

  if (
    mostCorrectData.isLoading &&
    continuousCorrectData.isLoading &&
    totalChallengeData.isLoading &&
    distributionData.isLoading &&
    myAnswerRatioData.isLoading
  )
    return <SpinnerUi/>;

  return (
    <IntegratedStatisticsLayout>
      <FlexBox>
        <CheckSquareIcon className={"mr-10"}/>
        <Typography $color={"textBlack100"} $variant={"body1"} $weight={"bold"}>
          나의 정답률
        </Typography>
      </FlexBox>
      <hr/>
      <StatisticsItemContainer>
        <StatisticsItemLists>
          <StatisticsSection1>
            <StatisticsItems>
              <Typography
                $color={"textBlack200"}
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
                  $color={"textBlack200"}
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
                $color={"textBlack200"}
                $variant={"body2"}
                $weight={"medium"}
              >
                최다 연속 정답
              </Typography>
              <div>
                <Typography
                  $color={"textPrimary"}
                  $variant={"body2"}
                  $weight={"bold"}
                >
                  {mostCorrectData.data && mostCorrectData.data.most}
                </Typography>
                <Typography
                  as={"span"}
                  $color={"textBlack200"}
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
                $color={"textBlack200"}
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
                  $color={"textBlack200"}
                  $variant={"caption"}
                  $weight={"regular"}
                  className={"word"}
                >
                  번
                </Typography>
              </div>
            </StatisticsItems>
          </StatisticsSection1>
        </StatisticsItemLists>
        <StatisticsSection2>
          <Typography
            $color={"textBlack200"}
            $variant={"body1"}
            $weight={"medium"}
            className={"answer_ratio"}
          >
            나의 정답률
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
      </StatisticsItemContainer>
      <FlexBox>
        <TiChartPie color={"var(--primary)"} size={28} className={"mr-10"}/>
        <Typography $color={"textBlack100"} $variant={"body1"} $weight={"bold"}>
          도전 분포
        </Typography>
      </FlexBox>
      <hr/>
      {distributionData.data && <PieChart data={distributionData.data}/>}
    </IntegratedStatisticsLayout>
  );
};
