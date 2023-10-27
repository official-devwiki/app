export interface ResponseData<T> {
  success: boolean;
  result: {
    data: T;
  }
}

export interface Quiz {
  answerLength: number;
  prefixWord: string;
  suffixWord: string;
  question: string;
}

export type Block = {
  [key: string]: string;
}

export interface Chance {
  step: number;
  answer: boolean;
  hint: Block[];
}

