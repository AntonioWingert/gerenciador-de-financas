import theme from '@/styles/theme';
import tw from 'tailwind-styled-components';
import { CustomInputProps } from '.';

export const Container = tw.div`
  flex
  flex-col
  justify-center
  items-start
  w-max
  gap-2
`;

export const Input = tw.input<CustomInputProps>`
  border
  border-gray-300
  border-solid
  rounded
  p-2
  outline-none

  ${({ texterror }) => texterror && `border-red-400`}
`;

export const Label = tw.label`
  ${() => theme.colors.primary}
  font-bold
`;

export const TextError = tw.span`
  ${() => theme.colors.danger}
  font-bold
  mb-2
  
`;
