import styled from 'styled-components';
import {useState} from 'react';
import {Typography} from '@components/common/typography/Typography';


const QuizForm = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;

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

export const QuizWriteForm = () => {
  const [quizState, setQuizState] = useState<QuizState>({question: '', answer: '', prefix: '', suffix: ''});
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
      <Button type={'submit'}
              className={'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'}>
        <Typography variant={'body2'} color={'white'} weight={'bold'}>
          저장
        </Typography>
      </Button>
    </QuizForm>
  );
};
