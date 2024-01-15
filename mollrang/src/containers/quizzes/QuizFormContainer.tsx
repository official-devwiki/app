import { Typography } from "@components/common/Typography";
import { QuizForm } from "@components/quizzes/form/QuizForm";
import * as S from "./QuizFormContainer.style";
import { ReactElement, useEffect, useState } from "react";
import { useAuth } from "@providers/authProvider";
import { getUserHistory } from "@services/apis/users";
import { responseDataConvert } from "@utils/convert";
import { Chance } from "@interfaces/quizzes";
import { setCorrected } from "@store/slice/quizSlice";
import { useAppDispatch } from "@hooks/useRedux";

type Hint = Record<string, string>;

export interface QuizFormState {
  userId: string;
  count: number;
  isCorrected: boolean;
  hint: Hint[];
}

const initialStepState: Chance[] = [
  { step: 1, answer: false, hint: [], userId: "", todayAnswer: "" },
  { step: 2, answer: false, hint: [], userId: "", todayAnswer: "" },
  { step: 3, answer: false, hint: [], userId: "", todayAnswer: "" },
  { step: 4, answer: false, hint: [], userId: "", todayAnswer: "" },
  { step: 5, answer: false, hint: [], userId: "", todayAnswer: "" },
];

const initialState: QuizFormState = {
  userId: "",
  count: 0,
  hint: [],
  isCorrected: false,
};

export const QuizFormContainer = (): ReactElement => {
  const { userInfo } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [checkBox, setCheckBox] = useState<Chance[]>([]);
  const [todayCompleted, setTodayCompleted] = useState(false);

  const dispatch = useAppDispatch();

  const getQuizHistory = async () => {
    const data = await getUserHistory(userInfo?.id);
    let arr = [];
    if (data.success) {
      if (data.result.data && data.result.data.length === 0) {
        initialState.userId = userInfo?.id;
        arr = [initialState];
      } else {
        arr = responseDataConvert<QuizFormState[]>(data);
      }
    } else {
      initialState.userId = userInfo?.id;
      arr = [initialState];
    }
    return arr;
  };

  const dataInitialize = async () => {
    const state = await getQuizHistory();
    setCurrentStep(state[state.length - 1].count);

    state.forEach((value) => {
      const { isCorrected } = value;
      if (isCorrected || state.length >= 5) {
        setTodayCompleted(true);
        dispatch(setCorrected(true));
      }
    });

    state.forEach((value, index) => {
      const { hint = [], count, userId } = value;
      initialStepState[index].userId = userId;
      if (initialStepState[index].step === count && count < 5) {
        initialStepState[index].userId = userId;
        initialStepState[index].hint = hint;
        initialStepState[index].answer = hint.length > 0 || true;
      } else if (initialStepState[index].step === count && count === 5) {
        initialStepState[index].hint = [];
        initialStepState[index].userId = userId;
        initialStepState[index].answer = true;
      } else if (count === 0) {
        initialStepState[index].hint = [];
        initialStepState[index].answer = false;
      }
    });

    setCheckBox(initialStepState);
  };

  useEffect(() => {
    dataInitialize();
  }, []);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const completed = (payload: boolean) => {
    setTodayCompleted(payload);
  };

  const checkboxUpdate = (payload: Chance[]) => {
    setCheckBox(payload);
  };

  return (
    <S.QuizLayout>
      <S.QuizBox>
        <S.QuizWrapper>
          <Typography $variant={"h1"} $color={"textDefault"}>
            오늘의 퀴즈
          </Typography>
          <QuizForm
            todayCompleted={todayCompleted}
            checkBox={checkBox}
            currentStep={currentStep}
            setCurrentStep={nextStep}
            setTodayCompleted={completed}
            setCheckBox={checkboxUpdate}
          />
        </S.QuizWrapper>
      </S.QuizBox>
    </S.QuizLayout>
  );
};
