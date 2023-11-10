import {ChangeEvent, ComponentProps, ForwardedRef, forwardRef, ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import classNames from 'classnames';
import * as S from './style';

type InputValue = string | number | ReadonlyArray<string>
type InputChangeEvent = ChangeEvent<HTMLInputElement>
type InputVariant = 'default' | 'input_button' | 'checkbox'

interface InputProps extends ComponentProps<'input'> {
  $variant?: InputVariant;
  label?: string;
  value?: InputValue;
  onChange?: (event: InputChangeEvent) => void;
}

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
  const {
    $variant = 'default',
    label,
    placeholder,
    disabled,
    className,
    value,
    onChange,
    id,
    type = 'text',
    ...rest
  } = props;


  const onChangeHandler = (event: InputChangeEvent): void => {
    onChange && onChange(event);
  };

  return (
    <S.Label htmlFor={id}>
      <S.Input
        ref={ref}
        className={classNames($variant, className)}
        disabled={disabled}
        id={id}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChangeHandler}
        {...rest}
      />
      {label && type === 'checkbox' && (
        <Typography className={'checkbox_label'}>{label}</Typography>
      )}
      {label && type !== 'checkbox' && (
        <Typography className={'pb-8'} $weight={'bold'}>
          {label}
        </Typography>
      )}
    </S.Label>
  );
});

Input.displayName = 'Input';
