import { FaArrowDown, FaArrowUp, FaDollarSign } from 'react-icons/fa';

import * as S from './styles';

import ExpensesTracker from '@/components/ExpensesTracker';
import Header from '@/components/Header';
import ElChart from '@/components/ElChart';
import { chartData } from '@/@Types/chartTypes';

export default function Dashboard() {
  const expensesValues = 1000;
  const incomeData: chartData = [
    ['Alimentação', 1000],
    ['Educação', 400],
    ['Lazer', 200],
    ['Saúde', 800],
    ['Transporte', 100],
  ];

  const recipeData: chartData = [
    ['Salário', 1000],
    ['Freela', 400],
    ['Vendas', 200],
  ];

  return (
    <S.Container>
      <Header />
      <S.ExpenseWrapper>
        <ExpensesTracker
          icon={<FaArrowUp />}
          title="Receitas"
          values={expensesValues}
          $iconColor="success"
          redirectTo="recipes"
        />
        <ExpensesTracker
          icon={<FaArrowDown />}
          title="Despesas"
          values={expensesValues}
          $iconColor="danger"
          redirectTo="incomes"
        />
        <ExpensesTracker
          icon={<FaDollarSign />}
          title="Total"
          values={expensesValues}
          $iconColor="success"
        />
      </S.ExpenseWrapper>
      <S.ChartWrapper>
        <ElChart data={recipeData} chartTitle="Receitas" />
        <ElChart data={incomeData} chartTitle="Despesas" />
      </S.ChartWrapper>
    </S.Container>
  );
}
