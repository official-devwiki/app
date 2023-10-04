import {ReactElement} from 'react';
import {QuizLists} from '@components/mollrang/quiz-lists';
import {QuizWriteForm} from '@components/mollrang/quiz-write';

export const MollrangPage = (): ReactElement => {
  return (
    <div>
      <QuizLists />
      <QuizWriteForm />
    </div>
  );
};
