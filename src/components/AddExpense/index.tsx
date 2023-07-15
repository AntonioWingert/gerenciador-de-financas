'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './styles';

import AddExpenseInput from '../AddExpenseInput';
import AddExpenseButton from '../AddExpenseButton';

const schema = z.object({
  date: z.date(),
  value: z.string().min(1, 'Minimo 1 caracteres'),
  description: z.string().min(0, 'Minimo 1 caracteres'),
  category: z.enum(['1', '2', '3', '4', '5', '6']),
});

type Inputs = z.infer<typeof schema>;

export function AddExpense() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const parseData = (value: string) => {
    return new Date(value);
  };

  const onSubmit: SubmitHandler<Inputs> = ({
    value,
    description,
    category,
    date,
  }) => {
    console.log(
      value,
      description,
      category,
      date.toLocaleDateString('pt-BR', {
        dateStyle: 'short',
      }),
    );
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <AddExpenseInput
        placeholder=""
        type="date"
        texterror={errors.date?.message}
        {...register('date', { setValueAs: parseData })}
      />
      <AddExpenseInput
        placeholder="Digite o valor"
        type="number"
        texterror={errors.value?.message}
        {...register('value', { required: true })}
      />
      <AddExpenseInput
        placeholder="Digite a descrição"
        texterror={errors.description?.message}
        {...register('description')}
      />
      <label htmlFor="category">
        Categoria
        <select id="category" {...register('category')}>
          <option value="1">Alimentação</option>
          <option value="2">Educação</option>
          <option value="3">Lazer</option>
          <option value="4">Saúde</option>
          <option value="5">Transporte</option>
          <option value="6">Outros</option>
        </select>
      </label>
      <AddExpenseButton type="submit">Nova Despesa</AddExpenseButton>
    </S.Container>
  );
}
