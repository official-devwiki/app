import { QuizCompleted } from "@components/quizzes/completed/QuizCompleted";
import { useAuth } from "providers/authProvider";
import { ReactElement } from "react";

export const QuizCompletedContainer = (): ReactElement => {
  const { userId } = useAuth();

  return (
    <div>
      <QuizCompleted />
    </div>
  );
};
