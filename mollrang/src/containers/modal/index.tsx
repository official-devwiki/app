import { IntegratedStatistics } from "@containers/statistics/IntegratedStatistics";
import { QuizGuide } from "@components/quizzes/guide/QuizGuide";
import { ModalHandler } from "@components/common/modal/ModalHandler";
import { useAppSelector } from "@hooks/useRedux";
import { ReactElement } from "react";

export const QuizCompleted = (): ReactElement => {
  return (
    <div>
      <div>퀴즈 완료</div>
    </div>
  );
};

export const ModalContainer = () => {
  const type = useAppSelector((state) => state.modalStore.modal.type);

  return (
    <ModalHandler>
      {type === "statistics" && <IntegratedStatistics />}
      {type === "guide" && <QuizGuide />}
      {type === "quiz-completed" && <QuizCompleted />}
    </ModalHandler>
  );
};
