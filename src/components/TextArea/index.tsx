/* eslint-disable react/jsx-props-no-spreading */
import React, { TextareaHTMLAttributes } from 'react';
import { StyledLabel } from '@/components/Input/styles';
import StyledTextArea from './styles';

interface TextAreProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  label?: string;
  register: any;
}

function TextArea({
  id = '',
  label = '',
  name,
  onChange = () => null,
  register = () => null,
  ...textAreaRestProps
}: TextAreProps) {
  return (
    <>
      {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
      <StyledTextArea
        id={id || name}
        {...register(name)}
        {...{ name, onChange }}
        {...textAreaRestProps}
      />
    </>
  );
}

export default TextArea;
