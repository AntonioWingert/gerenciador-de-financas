import tw from 'tailwind-styled-components';

import { TitleProps } from '.';
import theme from '../../styles/theme';

export const Container = tw.h1<TitleProps>`

${({ $color }) => $color && theme.colors[$color]}

${({ $size }) => $size && theme['text-sizes'][$size]}
`;
