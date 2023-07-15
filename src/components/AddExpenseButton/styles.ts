import tw from 'tailwind-styled-components';
import { AddExpenseButtonProps } from '.';
import theme from '../../styles/theme';

export const Container = tw.button<AddExpenseButtonProps>`
  ${({ $variable }) => $variable && theme['background-colors'][$variable]}
  
  ${() => theme.colors.secondary}
  rounded
  w-full
  p-2

  hover:opacity-80
`;
