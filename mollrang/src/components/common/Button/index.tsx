import {ComponentProps, ReactElement} from 'react';
import classNames from 'classnames';
import * as S from './style';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonVariant =
  | 'primary'
  | 'primary-rounded'
  | 'secondary'
  | 'icon';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  icon?: JSX.Element;
  type?: ButtonType;
}

export const Button = (props: ButtonProps): ReactElement => {
  const {
    variant = 'primary',
    className,
    type = 'button',
    icon,
    children,
    disabled,
    ...rest
  } = props;

  return (
    <S.Button
      className={classNames(variant, className)}
      disabled={disabled}
      {...rest}
      type={type}
    >
      {icon}
      {children}
    </S.Button>
  );
};

Button.displayName = 'Button';