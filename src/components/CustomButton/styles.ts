import tw from 'tailwind-styled-components';
import { CustomButtonProps } from '.';
import theme from '../../styles/theme';

export const Container = tw.button<CustomButtonProps>`
  ${({ $variable }) => $variable && theme['background-colors'][$variable]}
  
  ${() => theme.colors.secondary}
  rounded
  w-full
  p-2

  hover:opacity-80
`;
