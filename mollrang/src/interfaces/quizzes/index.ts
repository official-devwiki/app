export interface ResponseData<T> {
  success: boolean;
  result: {
    data: T;
  };
}

export interface Quiz {
  answerLength: number;
  prefix: string;
  suffix: string;
  question: string;
}

export type Block = {
  [key: string]: string;
};

export interface Chance {
  step: number;
  answer: boolean;
  userId: string;
  hint: Block[];
}
