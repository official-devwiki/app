import { ReactElement } from "react";
import { useContinuousCorrectQuery } from "@services/queries/statisticsQuery";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import {LabelBox} from "@components/ui/label/LabelBox";

export const ContinuousAnswers = (): ReactElement => {
  const { data, isLoading } = useContinuousCorrectQuery<{continuous: number}>();

  return (
    <>
      {isLoading ?
        (<SkeletonUi theme={{ height: 20, width: 30, borderRadius: 4 }} />) : (
          <LabelBox
            title={' 연속 정답 횟수'}
            contents={`${data.continuous} 일`}
            titleColor={'textGray100'}
            contentsColor={'textPrimary'}
            variantTitle={'caption'}
            titleWeight={'bold'}
            contentsWeight={'bold'}
          />)  }
    </>
  );
};
