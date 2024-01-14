import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {quizAnswerSubmit} from '@store/thunk/quizThunk';
import {HYDRATE} from 'next-redux-wrapper';
import {Store} from "@interfaces/store";

const initialState: QuizStore = {
  count: 1,
  isCorrected: false,
};

export const QuizSlice = createSlice({
  name: 'quizStore',
  initialState,
  reducers: {
    setCompleteCount(state: QuizStore, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    setCorrected(state: QuizStore, action: PayloadAction<boolean>) {
      state.isCorrected = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(quizAnswerSubmit.fulfilled, (state, action) => {
      })
      .addCase(quizAnswerSubmit.rejected, (state, action) => {
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

export const {setCompleteCount, setQuizState, setCorrected} =
  QuizSlice.actions;
