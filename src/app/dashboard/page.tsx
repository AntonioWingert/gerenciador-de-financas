import ExpensesTracker from '@/components/ExpensesTracker';

import * as S from './styles';

import { FaArrowDown, FaArrowUp, FaDollarSign } from 'react-icons/fa';

export default function Dashboard() {
  const expensesValues = 1000;
  return (
    <S.Container>
      <h1>Dashboard</h1>
      <ExpensesTracker
        icon={<FaArrowUp />}
        title="Receitas"
        values={expensesValues}
        $iconColor="success"
      />
      <ExpensesTracker
        icon={<FaArrowDown />}
        title="Despesas"
        values={expensesValues}
        $iconColor="danger"
      />
      <ExpensesTracker
        icon={<FaDollarSign />}
        title="Total"
        values={expensesValues}
        $iconColor="success"
      />
    </S.Container>
  );
}
