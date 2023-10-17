import { ReactElement } from "react";
import styled from "styled-components";
import { Typography } from "@components/common/Typography";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import { useGetMyAnswersQuery } from "@services/queries/statisticsQuery";

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

export const CorrectAnswers = (): ReactElement => {
  const { data, isLoading } = useGetMyAnswersQuery("uuid");

  return (
    <CorrectAnswerLayout>
      <CorrectAnswerBox>
        <Typography color={"textDefault"} weight={"bold"} variant={"body1"}>
          나의 정답률
        </Typography>
        {isLoading ? (
          <SkeletonUi theme={{ height: 20, width: 30, borderRadius: 4 }} />
        ) : (
          <Typography
            as={"span"}
            color={"textPrimary"}
            weight={"bold"}
            variant={"body1"}
          >
            {data && data[0].ratio} %
          </Typography>
        )}
      </CorrectAnswerBox>
    </CorrectAnswerLayout>
  );
};
