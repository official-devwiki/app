import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { Typography } from "@components/common/Typography";
import { CheckSquareIcon } from "@components/common/icons/CheckSquareIcon";
import {
  useContinuousCorrectQuery,
  useGetMyAnswersQuery,
  useGetMyDistributionQuery,
  useMostContinuousCountQuery,
  useMyTotalChallengeQuery,
} from "@services/queries/statisticsQuery";
import { TiChartPie } from "react-icons/ti";
import { useAuth } from "@providers/authProvider";
import { SpinnerUi } from "@components/ui/spinner/SpinnerUi";
import * as S from "./IntegratedStatistics.style";

const PieChart = dynamic(() => import("@components/charts/PieChart"), {
  ssr: false,
});

export const IntegratedStatistics = (): ReactElement => {
  const { userInfo } = useAuth();
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
    return (
      <S.IntegratedStatisticsLayout>
        <SpinnerUi />
      </S.IntegratedStatisticsLayout>
    );

  return (
    <S.IntegratedStatisticsLayout>
      <S.FlexBox>
        <CheckSquareIcon className={"mr-10"} />
        <Typography $color={"textBlack100"} $variant={"body1"} $weight={"bold"}>
          히스토리
        </Typography>
      </S.FlexBox>
      <hr />
      <S.StatisticsItemContainer>
        <S.StatisticsItemLists>
          <S.StatisticsSection1>
            <S.StatisticsItems>
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
            </S.StatisticsItems>
            <S.StatisticsItems>
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
            </S.StatisticsItems>

            <S.StatisticsItems>
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
            </S.StatisticsItems>
          </S.StatisticsSection1>
        </S.StatisticsItemLists>
        <S.StatisticsSection2>
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
        </S.StatisticsSection2>
      </S.StatisticsItemContainer>
      <S.FlexBox>
        <TiChartPie color={"var(--primary)"} size={28} className={"mr-10"} />
        <Typography $color={"textBlack100"} $variant={"body1"} $weight={"bold"}>
          도전 분포
        </Typography>
      </S.FlexBox>
      <hr />
      <Typography $color={"textGray400"} $variant={"body2"}>
        몇 번째에 정답을 맞혔는지 확인해 보세요!!
      </Typography>
      {distributionData.data && <PieChart data={distributionData.data} />}
    </S.IntegratedStatisticsLayout>
  );
};
