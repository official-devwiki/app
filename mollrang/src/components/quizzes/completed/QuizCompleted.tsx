import { mockPie } from "@containers/statistics/IntegratedStatistics";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

const PieChart = dynamic(() => import("@components/charts/PieChart"), {
  ssr: false,
});

export const QuizCompleted = (): ReactElement => {
  return (
    <div>
      <div>퀴즈가 완료되었습니다.</div>
      <PieChart data={mockPie} />
    </div>
  );
};
