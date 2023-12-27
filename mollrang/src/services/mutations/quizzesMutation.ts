import {UseMutateFunction, useMutation} from "@tanstack/react-query";
import {quizSolutionSubmit} from "@services/apis/quizzes";
import toast from "@components/common/toast/ToastHandler";
import {queryClient} from "@libs/Tanstack";
import {QueryKeys} from "@services/keys/queryKeys";

export type QuizSubmitData = {
  count: number;
  userId: string;
  answer: string;
}

export const useQuizAnswerSubmitMutate = (): UseMutateFunction<any, unknown, QuizSubmitData, unknown> => {
  const {mutate} = useMutation({
    mutationKey: [QueryKeys.Quizzes.submitAnswer],
    mutationFn: (payload: QuizSubmitData) => quizSolutionSubmit(payload),
    onSuccess: async (payload: any) => {
      console.log(payload)
      await queryClient.invalidateQueries([QueryKeys.Quizzes.submitAnswer]);
    },
    onError: (e) => {
      toast.message(`퀴즈 등록에 실패하였습니다 - ${e}`, 'error');
    }
  });
  return mutate;
}


