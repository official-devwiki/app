import { UseMutateFunction, useMutation } from "@tanstack/react-query";
import { quizSolutionSubmit } from "@services/apis/quizzes";
import toast from "@components/common/toast/ToastHandler";
import { queryClient } from "@libs/Tanstack";
import { QueryKeys } from "@services/keys/queryKeys";

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
  const { mutate, isSuccess, data } = useMutation({
    mutationKey: [QueryKeys.Quizzes.submitAnswer],
    mutationFn: (payload: QuizSubmitData) => quizSolutionSubmit(payload),
    onSuccess: async (payload: any) => {
      await queryClient.invalidateQueries([
        QueryKeys.Quizzes.submitAnswer,
        QueryKeys.Statistics.getMyAnswers,
        QueryKeys.Statistics.getContinuousCorrectCount,
        QueryKeys.Users.getAttendance,
      ]);
    },
    onError: (e) => {
      toast.message(`퀴즈 등록에 실패하였습니다 - ${e}`, "error");
    },
  });
  return { mutate, isSuccess, data };
};
