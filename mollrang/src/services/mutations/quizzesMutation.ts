import {UseMutateFunction, useMutation} from "@tanstack/react-query";
import {quizSolutionSubmit} from "@services/apis/quizzes";
import {queryClient} from "@libs/Tanstack";
import {QueryKeys} from "@services/keys/queryKeys";

export type QuizSubmitData = {
  count: number;
  userId: string;
  answer: string;
};

/*
: UseMutateFunction<
  any,
  unknown,
  QuizSubmitData,
  unknown
>
*/
export const useQuizAnswerSubmitMutate = () => {
  const {mutate, isSuccess, data} = useMutation({
    mutationKey: [QueryKeys.Quizzes.submitAnswer],
    mutationFn: (payload: QuizSubmitData) => quizSolutionSubmit(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        QueryKeys.Quizzes.submitAnswer,
        QueryKeys.Statistics.getMyAnswers,
        QueryKeys.Statistics.getContinuousCorrectCount,
        QueryKeys.Users.getAttendance,
      ]);
    }
  });
  return {mutate, isSuccess, data};
};
