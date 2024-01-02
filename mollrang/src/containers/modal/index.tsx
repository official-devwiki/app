import { IntegratedStatistics } from "@containers/statistics/IntegratedStatistics";
import { QuizGuide } from "@components/quizzes/guide/QuizGuide";
import { ModalHandler } from "@components/common/modal/ModalHandler";
import { useAppSelector } from "@hooks/useRedux";
import { QuizCompletedContainer } from "@containers/quizzes/QuizCompletedContainer";

export const ModalContainer = () => {
  const type = useAppSelector((state) => state.modalStore.modal.type);

  return (
    <ModalHandler>
      {type === "statistics" && <IntegratedStatistics />}
      {type === "guide" && <QuizGuide />}
      {type === "quiz-completed" && <QuizCompletedContainer />}
    </ModalHandler>
  );
};
