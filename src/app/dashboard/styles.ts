import tw from 'tailwind-styled-components';

export const Container = tw.div`
w-screen
h-screen

flex
flex-col

md:items-center
md:justify-center
`;

export const ExpenseWrapper = tw.div`
flex
flex-col

gap-2

md:flex-row
md:items-center
md:justify-between
`;

export const ChartWrapper = tw.div`
flex
flex-col
h-full

md:w-[80%]
md:flex-row
md:items-center
md:justify-center
`;
