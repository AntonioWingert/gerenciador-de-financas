import theme from '@/styles/theme';
import tw from 'tailwind-styled-components';
import { ExpensesTrackerProps } from '.';

type WrapperIconProps = Pick<ExpensesTrackerProps, '$iconColor'>;

export const Container = tw.div`
  w-full
  h-28
  flex
  justify-between
  items-center
  p-4
  cursor-pointer

  ${() => theme['background-colors'].secondary}

  md:w-60
  md:rounded-lg
  md:shadow-md

  `;

export const WrapperValues = tw.div`
  flex
  flex-col
  items-start
  justify-around
  h-full
`;

export const WrapperIcon = tw.div<WrapperIconProps>`
  flex
  justify-center
  items-center
  border-none
  ${({ $iconColor }) => $iconColor && theme['background-colors'][$iconColor]}

  ${() => theme.colors.secondary}
  rounded-full

  h-12
  w-12


 `;

export const Title = tw.h2`
  text-lg
`;

export const Values = tw.h3`
  text-xl
  font-bold
`;
