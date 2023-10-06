import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {quizAnswerSubmit} from '@store/thunk/quizThunk';
import {HYDRATE} from 'next-redux-wrapper';

export interface QuizState {
  currentStep: number;
  hasResult: boolean;
  timer: number;
  endOfQuiz: boolean;
}

const initialState: QuizState = {
  currentStep: 1,
  hasResult: false,
  timer: 60,
  endOfQuiz: false,
};

export const QuizSlice = createSlice({
  name: 'quizStore',
  initialState,
  reducers: {
    setCurrentStep(state: QuizState, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
    setHasResult(state: QuizState, action: PayloadAction<boolean>) {
      state.hasResult = action.payload;
    },
    setTimer(state: QuizState, action: PayloadAction<number>) {
      state.timer = action.payload;
    },
    setEndOfQuiz(state: QuizState, action: PayloadAction<boolean>) {
      state.endOfQuiz = action.payload;
    },
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

export const {setCurrentStep, setHasResult, setTimer, setEndOfQuiz} =
  QuizSlice.actions;
