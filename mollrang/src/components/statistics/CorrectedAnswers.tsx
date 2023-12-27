import {FunctionComponent, ReactElement} from "react";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import { useGetMyAnswersQuery } from "@services/queries/statisticsQuery";
import {LabelBox} from "@components/ui/label/LabelBox";

export const CorrectedAnswers: FunctionComponent<{ userId: string }>  = ({ userId }): ReactElement => {
  const {data, isLoading} = useGetMyAnswersQuery(userId);

  return (
    <>
      {isLoading ?
        (<SkeletonUi theme={{ height: 20, width: 30, borderRadius: 4 }} />) : (
          <LabelBox
            title={'나의 정답률'}
            contents={`${data.corrected} %`}
            contentsColor={'textPrimary'}
            titleWeight={'bold'}
            contentsWeight={'bold'}
          />)  }
    </>
  );
};
