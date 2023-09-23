import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import {Input} from '@components/common/Input';
import {CheckCircleIcon} from '@components/common/icons/CheckCicleIcon';
import styled from 'styled-components';

const QuizFormLayout = styled.form`
  width: 100%;
`;

const QuizAnswerCheckLists = styled.ul`
  margin-top: 20px;
`;

const QuizSolutionBox = styled.div`
  margin-top: 20px;

  label {
    margin: 1em 0;

    input::placeholder {
      color: #A4A4A4;
    }
  }
`;

export const QuizForm = (): ReactElement => {

  const CheckIconsBox = (): ReactElement => {
    return (
      <QuizAnswerCheckLists>
        <CheckCircleIcon className={'active'} />
        <CheckCircleIcon />
        <CheckCircleIcon />
        <CheckCircleIcon />
        <CheckCircleIcon />
      </QuizAnswerCheckLists>
    );
  };

  return (
    <QuizFormLayout>
      <CheckIconsBox />

      <QuizSolutionBox>
        <Typography variant={'body1'} weight={'bold'}>
          개발자가 다크모드를 좋아하는 이유는?
        </Typography>
        <Input type={'text'} placeholder={'정답을 입력해 주세요.'} />
      </QuizSolutionBox>
      <div>
        <Typography variant={'body2'} weight={'medium'}>
          정답에 "버"가 포함되어있어요.!
        </Typography>
        {/*<Typography color={'red'} variant={'body2'} weight={'medium'}>*/}
        {/*  일치하는 글자가 없어요...*/}
        {/*</Typography>*/}
      </div>
    </QuizFormLayout>
  );
};
