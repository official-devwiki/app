import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {quizAnswerSubmit} from '@store/thunk/quizThunk';
import {HYDRATE} from 'next-redux-wrapper';
import {Store} from "@interfaces/store";
import {QuizFormState} from "@containers/quizzes/QuizFormContainer";

const initialState: QuizStore = {
  currentStep: 1,
  hasResult: false,
  timer: 60,
  endOfQuiz: false,
  count: 1,
  formState: []
};

export const QuizSlice = createSlice({
  name: 'quizStore',
  initialState,
  reducers: {
    setCurrentStep(state: QuizStore, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    setHasResult(state: QuizStore, action: PayloadAction<boolean>) {
      state.hasResult = action.payload;
    },
    setTimer(state: QuizStore, action: PayloadAction<number>) {
      state.timer = action.payload;
    },
    setEndOfQuiz(state: QuizStore, action: PayloadAction<boolean>) {
      state.endOfQuiz = action.payload;
    },
    setCompleteCount(state: QuizStore, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    setQuizState(state: QuizStore, action: PayloadAction<QuizFormState[]>) {
      state.formState = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(quizAnswerSubmit.fulfilled, (state, action) => {
        // api 호출 성공 시  다음 단계로 이동
        state.hasResult = true;
        state.timer = 60;
      })
      .addCase(quizAnswerSubmit.rejected, (state, action) => {
        // 실패 시 초기화
        state.currentStep = 1;
        state.hasResult = false;
        state.timer = 60;
      })
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action,
        };
      });
  },
});

export type QuizStore = Store.Quiz.State;

export const {setCurrentStep, setHasResult, setTimer, setEndOfQuiz, setCompleteCount, setQuizState} =
  QuizSlice.actions;
