import {useAuth} from "providers/authProvider";
import {ReactElement, useEffect} from "react";
import dynamic from "next/dynamic";
import {useGetMyDistributionQuery} from "@services/queries/statisticsQuery";
import {SpinnerUi} from "@components/ui/spinner/SpinnerUi";

const PieChart = dynamic(() => import("@components/charts/PieChart"), {
  ssr: false,
});

export const QuizCompletedContainer = (): ReactElement => {
  const {userId} = useAuth();
  const distributionData = useGetMyDistributionQuery(userId);

  if (distributionData.isLoading) return <SpinnerUi/>;

  return (
    <div>
      <PieChart data={distributionData.data}/>
    </div>
  );
};
