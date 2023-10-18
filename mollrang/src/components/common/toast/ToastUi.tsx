import { ReactElement } from "react";
import * as S from "./style";
import { Typography } from "../Typography";
import { ToastVariant } from "./ToastHandler";

interface Props {
  messages: any[];
  variant?: ToastVariant;
  closeBox?: any;
  closeMessage?: any;
}

export const ToastUi = (props: Props): ReactElement => {
  const { messages } = props;
  const active = messages.length > 0;

  return (
    <S.ToastLayout className={active && "active"}>
      {messages.map((toast) => {
        return (
          <S.ToastBox key={toast.id + "Toast"}>
            <Typography>{toast.message}</Typography>
          </S.ToastBox>
        );
      })}
    </S.ToastLayout>
  );
};
