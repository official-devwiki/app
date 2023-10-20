import React, { ChangeEvent, ComponentProps, ReactElement } from "react";
import classNames from "classnames";
import { BlockInputElement } from "@components/common/input/style";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
type InputVariant = "hint" | "success";

interface Props extends ComponentProps<"input"> {
  variant?: InputVariant;
  disabled?: boolean;
  onChange?: (event: InputChangeEvent) => void;
}

export const BlockInput = (props: Props): ReactElement => {
  const { variant, disabled = false, className, onChange, ...rest } = props;

  const onChangeHandler = (event: InputChangeEvent): void => {
    onChange && onChange(event);
  };

  return (
    <BlockInputElement
      onChange={onChangeHandler}
      minLength={1}
      maxLength={1}
      tabIndex={10}
      type={"text"}
      className={classNames(className, variant)}
      disabled={disabled}
      {...rest}
    />
  );
};
