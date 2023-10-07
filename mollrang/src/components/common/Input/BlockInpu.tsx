import styled from 'styled-components';
import React, {ComponentProps, ReactElement} from 'react';

const Input = styled.input`
  outline: none;
  width: 50px;
  height: 39px;
  border: 1px solid #DFDFDF;
  border-radius: 4px;
  background-color: #fdfdfd;

  &:focus {
    background-color: #fff;
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

type InputVariant = '' | 'hint' | 'success'

interface Props extends ComponentProps<'input'> {
  variant?: InputVariant;
  disabled?: boolean;
}

export const BlockInput = (props: Props): ReactElement => {
  const {variant = '', disabled = false, className} = props;
  return (
    <Input minLength={1} maxLength={1} tabIndex={10} type={'text'} className={className} disabled={disabled} />
  );
};
