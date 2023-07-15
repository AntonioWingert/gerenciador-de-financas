import React from 'react';

import * as S from './styles';

export type AddExpenseButtonProps = {
  children: React.ReactNode;
  $variable?: 'danger' | 'success' | 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddExpenseButton = ({
  children,
  $variable = 'primary',
  ...props
}: AddExpenseButtonProps) => {
  return (
    <S.Container $variable={$variable} {...props}>
      {children}
    </S.Container>
  );
};

export default AddExpenseButton;
