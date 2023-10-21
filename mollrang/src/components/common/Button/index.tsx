import {ComponentProps, ReactElement} from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import styled from 'styled-components';
import React from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonVariant =
  | 'primary'
  | 'primary-rounded'
  | 'secondary'
  | 'icon';

interface ButtonProps extends ComponentProps<'button'> {
  $variant?: ButtonVariant;
  icon?: JSX.Element;
  type?: ButtonType;
}

const StyledComponent = (element: any) => styled(element)<{$variant: ButtonVariant}>`
  ${(props) => props.$variant}
`;

function baseElement(props: ButtonProps): ReactElement {
  const {
    $variant = 'primary',
    className,
    type = 'button',
    icon,
    children,
    ...rest
  } = props;

  return (
    <button
      className={classNames(styles[$variant], className)}
      {...rest}
      type={type}
    >
      {icon}
      {children}
    </button>
  );
}

const styledElement = StyledComponent(baseElement);

export const Button = (props: ButtonProps): ReactElement => {
  return React.createElement(styledElement, props);
};
