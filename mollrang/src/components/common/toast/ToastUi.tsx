import { ReactElement } from "react";
import styled from "styled-components";
import { Typography } from "../Typography";
import { ToastContainer, ToastVariant } from "./ToastHandler";

const ToastLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ToastBox = styled.div``;

interface Props {
  messages: any[];
  variant?: ToastVariant;
  closeBox?: any;
  closeMessage?: any;
  position: any;
}

export const ToastUi = (props: Props): ReactElement => {
  const { messages, position } = props;

  return (
    <>
      {messages.map((toast) => {
        return (
          <ToastContainer position={position} key={toast.id}>
            <ToastBox>
              <Typography>{toast.message}</Typography>
            </ToastBox>
          </ToastContainer>
        );
      })}
    </>
  );
};
