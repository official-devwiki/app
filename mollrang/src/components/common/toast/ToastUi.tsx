import { ReactElement } from "react";
import * as S from "./style";
import { Typography } from "../Typography";
import {Messages, ToastVariant} from "./ToastHandler";
import classNames from "classnames";

interface Props {
  messages: Messages[];
  variant?: ToastVariant;
  closeMessage?: (id: string) => void;
}

export const ToastUi = (props: Props): ReactElement => {
  const { messages, variant } = props;
  const active = messages.length > 0;

  return (
    <>
      {messages.map((toast) => {
        return (
          <S.ToastLayout className={classNames(variant, active && "active")}>
            <S.ToastBox key={toast.id + "Toast"}>
              <Typography $variant={'body2'} $weight={'bold'} $color={'textWhite'}>{toast.message}</Typography>
            </S.ToastBox>
          </S.ToastLayout>
        );
      })}
    </>
  );
};
