import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import styled from 'styled-components';

const QuizFormLayout = styled.form`
  width: 100%;
`;

const QuizSolutionBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #FFC700;
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.1);

  label {
    margin: 1em 0;

    input::placeholder {
      color: #A4A4A4;
    }
  }
`;

const EmptyBlock = styled.div`
  width: 20px;
  height: 20px;
  background-color: #D9D9D9;
  border-radius: 4px;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const InputContainer = styled.div`
`;
const InputLayout = styled.div`
  display: flex;
  justify-content: center;
  row-gap: 2em;
  column-gap: 2em;
  width: 100%;
  height: 100%;
  margin-top: 1em;
`;
const Input = styled.input`
  outline: none;
  width: 50px;
  height: 39px;
  border: 1px solid #DFDFDF;
  border-radius: 4px;
  background-color: #fff;
  
  &:focus {
    border-color: #00C7AE;
  }
  
  &:disabled {
    background-color: #EBEBEB;
  }
  
  &.success {
    &:disabled {
      border-color: #00C7AE;
      background-color: #00C7AE;
    } 
  }
  
  &.hint {
    &:disabled {
      border-color: #FFC700;
      background-color: #FFC700;
    }
  }
`;

/*
  TODO: 퀴즈 조회
 */
export const QuizForm = (): ReactElement => {

  return (
    <QuizFormLayout>
      <QuizSolutionBox>
        Q.
        <Typography variant={'body1'} weight={'bold'} color={'textDefault'}>
          개발자가 다크모드를 좋아하는 이유는?
        </Typography>
        <FlexBox>
          <EmptyBlock />
          <EmptyBlock />
          <Typography variant={'body2'} color={'textPrimary'} weight={'bold'}>꼬여서</Typography>
        </FlexBox>
      </QuizSolutionBox>
      <InputContainer>
        <InputLayout>
          <Input maxLength={1} className={'success'} disabled={true} />
          <Input className={'hint'} disabled={true} />
          <Input disabled={true} />
        </InputLayout>
        <InputLayout>
          <Input className={'success'} disabled={true} />
          <Input disabled={true} />
          <Input disabled={true} />
        </InputLayout>
        <InputLayout>
          <Input className={'success'} disabled={true} />
          <Input className={'hint'} disabled={true} />
          <Input className={'hint'} disabled={true} />
        </InputLayout>
        <InputLayout>
          <Input maxLength={1} minLength={1} tabIndex={10} />
          <Input disabled={true} />
          <Input disabled={true} />
        </InputLayout>
        <InputLayout>
          <Input maxLength={1} minLength={1} tabIndex={10} disabled={true} />
          <Input disabled={true} />
          <Input disabled={true} />
        </InputLayout>
      </InputContainer>

    </QuizFormLayout>
  );
};
