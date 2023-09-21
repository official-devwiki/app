import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import {Input} from '@components/common/Input';
import {CheckCircleIcon} from '@components/common/icons/CheckCicleIcon';

export const QuizForm = (): ReactElement => {
  return (
    <form>
      <div>
        <CheckCircleIcon className={'active'} />
        <CheckCircleIcon />
        <CheckCircleIcon />
        <CheckCircleIcon />
        <CheckCircleIcon />
      </div>
      <Typography>
        개발자가 다크모드를 좋아하는 이유는?
      </Typography>
      <Input type={'text'} />
      <div>
        <Typography variant={'body2'} weight={'medium'}>
          정답에 "버"가 포함되어있어요.!!
        </Typography>
        <Typography color={'red'} variant={'body2'} weight={'medium'}>
          일치하는 글자가 없어요...
        </Typography>
      </div>
    </form>
  );
};
