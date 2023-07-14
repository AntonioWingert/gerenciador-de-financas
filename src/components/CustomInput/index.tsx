import React, { forwardRef, useId } from 'react';

import * as S from './styles';

export type CustomInputProps = {
  placeholder: string;
  label?: string;
  texterror?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  function CustomInput(
    { placeholder, label = '', texterror = '', ...props },
    ref,
  ) {
    const id = useId();
    return (
      <S.Container>
        {label && <S.Label htmlFor={id}>{label}</S.Label>}
        <S.Input
          id={id}
          placeholder={placeholder}
          {...props}
          texterror={texterror}
          ref={ref}
        />
        {texterror && <S.TextError>{texterror}</S.TextError>}
      </S.Container>
    );
  },
);

export default CustomInput;
