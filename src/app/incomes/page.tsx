import { FaArrowDown } from 'react-icons/fa';
import * as S from './styles';
import ExpensesTracker from '@/components/ExpensesTracker';
import Header from '@/components/Header';
import AddExpenseButton from '@/components/AddExpenseButton';
import { AddExpense } from '@/components/AddExpense';

export default function Incomes() {
  const expensesValues = 1000;

  return (
    <S.Container>
      <Header />
      <S.ExpenseWrapper>
        <ExpensesTracker
          icon={<FaArrowDown />}
          title="Total"
          values={expensesValues}
          $iconColor="danger"
          redirectTo="incomes"
        />
      </S.ExpenseWrapper>
      <AddExpense />
      <AddExpenseButton>Nova Despesa</AddExpenseButton>
    </S.Container>
  );
}
