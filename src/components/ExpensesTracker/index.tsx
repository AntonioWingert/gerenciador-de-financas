'use client';

import React from 'react';
import * as S from './styles';
import { useRouter } from 'next/navigation';

export type ExpensesTrackerProps = {
  icon: React.ReactElement;
  title: string;
  values: number;
  redirectTo?: string;
  $iconColor?: 'danger' | 'success';
};

export default function ExpensesTracker({
  icon,
  title,
  values,
  redirectTo = 'dashboard',
  $iconColor = 'success',
}: ExpensesTrackerProps) {
  const router = useRouter();

  return (
    <S.Container onClick={() => router.push(redirectTo)}>
      <S.WrapperValues>
        <S.Title>{title}</S.Title>
        <S.Values>R$: {values.toFixed(2)}</S.Values>
      </S.WrapperValues>
      <S.WrapperIcon $iconColor={$iconColor}>{icon}</S.WrapperIcon>
    </S.Container>
  );
}
