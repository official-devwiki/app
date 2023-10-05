import styled from 'styled-components';
import {useState} from 'react';
import {Typography} from '@components/common/typography/Typography';


const QuizForm = styled.form`
  max-width: 600px;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }

  label input {
    outline: none;
    border: 1px solid #ededed;
    border-radius: 4px;
    padding: 0.2em 0.6em;
    height: 36px;
    margin-top: 0.4em;

    &:focus {
      border-color: #1f2937;
    }
  }
`;

interface QuizState {
  question: string;
  answer: string;
  prefix: string;
  suffix: string;
}

const Button = styled.button`
  min-width: 200px;
`;
/**
 * @description: 퀴즈 저장 - 2 가지 방식
 *  1. 단일 저장
 *  2. 여러 개 저장
 * @constructor
 */
export const QuizWriteForm = () => {
  const [quizState, setQuizState] = useState<QuizState>({question: '', answer: '', prefix: '', suffix: ''});
  const [requestQuizState, setRequestQuizState] = useState<QuizState[]>([]);

  const {question, answer, prefix, suffix} = quizState;
  return (
    <QuizForm>
      <InputWrapper>
        <label>
          퀴즈 제목
          <input name={'question'} value={question} type={'text'} />
        </label>
      </InputWrapper>
      <InputWrapper>
        <label>
          정답
          <input name={'answer'} value={answer} type={'text'} />
        </label>
      </InputWrapper>
      <InputWrapper>
        <label>
          부가 설명1
          <input name={'prefix'} value={prefix} type={'text'} />
        </label>
      </InputWrapper>
      <InputWrapper>
        <label>
          부가 설명2
          <input name={'suffix'} value={suffix} type={'text'} />
        </label>
      </InputWrapper>
      <div>
        <Button type={'submit'}
                className={'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'}>
          <Typography variant={'body2'} color={'white'} weight={'bold'}>
            저장
          </Typography>
        </Button>
        <Button type={'submit'}
                className={'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'}>
          <Typography variant={'body2'} color={'white'} weight={'bold'}>
            담기
          </Typography>
        </Button>
      </div>

      <p>추가 된 퀴즈 문제 : 1</p>
    </QuizForm>
  );
};
