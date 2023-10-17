import { ReactElement } from "react";
import { Typography } from "@components/common/Typography";
import styled from "styled-components";
import { useGetMyAnswersQuery } from "@services/queries/statisticsQuery";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";

const CorrectAnswerLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const CorrectAnswerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const Day = styled.span`
  display: flex;
  align-items: center;
`;

export const ConsecutiveAnswers = (): ReactElement => {
  const { data, isLoading } = useGetMyAnswersQuery("uuid");

  return (
    <CorrectAnswerLayout>
      <CorrectAnswerBox>
        <Typography $weight={"bold"} $variant={"caption"} $color={"textGray100"}>
          연속 정답 횟수
        </Typography>
        {isLoading ? (
          <SkeletonUi theme={{ height: 20, width: 30, borderRadius: 4 }} />
        ) : (
          <Day className={"flex"}>
            <Typography
              as={"span"}
              $color={"textPrimary"}
              $weight={"bold"}
              $variant={"body1"}
            >
              {data && data[0].ratio} 일
            </Typography>
          </Day>
        )}
      </CorrectAnswerBox>
    </CorrectAnswerLayout>
  );
};
