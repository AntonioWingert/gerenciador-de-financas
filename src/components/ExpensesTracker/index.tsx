'use client';

import React from 'react';
import * as S from './styles';

export type ExpensesTrackerProps = {
  icon: React.ReactElement;
  title: string;
  values: number;
  $iconColor?: 'danger' | 'success';
};

export default function ExpensesTracker({
  icon,
  title,
  values,
  $iconColor = 'success',
}: ExpensesTrackerProps) {
  return (
    <S.Container onClick={() => console.log('cliquei')}>
      <S.WrapperValues>
        <S.Title>{title}</S.Title>
        <S.Values>R$: {values.toFixed(2)}</S.Values>
      </S.WrapperValues>
      <S.WrapperIcon $iconColor={$iconColor}>{icon}</S.WrapperIcon>
    </S.Container>
  );
}
