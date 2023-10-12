import {ReactElement} from 'react';
import styled from 'styled-components';
import {Typography} from '../Typography';
import {ToastVariant} from './ToastHandler';

const ToastLayout = styled.div`
`;

const ToastBox = styled.div``;

interface Props {
  messages: any[];
  variant?: ToastVariant;
  closeBox?: any;
  closeMessage?: any;
}

export const ToastUi = (props: Props): ReactElement => {
  const {messages} = props;

  return (
    <ToastLayout>
      {messages.map((toast) => {
        return (
          <>
            <ToastBox key={toast.id + 'Toast'}>
              <Typography>{toast.message}</Typography>
            </ToastBox>
          </>
        );
      })}
    </ToastLayout>
  );
};
