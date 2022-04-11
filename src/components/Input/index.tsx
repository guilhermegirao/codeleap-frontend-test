/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react';
import StyledInput, { StyledLabel } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  register: any;
}

function Input({
  id = '',
  label = '',
  name,
  onChange = () => null,
  register = () => null,
  ...restInputProps
}: InputProps) {
  return (
    <>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledInput
        id={id || name}
        {...register(name)}
        {...{ name, onChange }}
        {...restInputProps}
      />
    </>
  );
}

export default Input;
