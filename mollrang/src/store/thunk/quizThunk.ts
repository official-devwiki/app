// import {insertQuizAnswer} from '@apis/quizzes';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const quizAnswerSubmit = createAsyncThunk<string, string>(
  'quiz/ANSWER_SUBMIT',
  async (quizId: string) => {
    const {data} = await functionThunk();
    return data;
  },
);

const functionThunk = async (): Promise<{data: any}> => {
  return {data: ''};
};
