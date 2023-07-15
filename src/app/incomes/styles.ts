import tw from 'tailwind-styled-components';

export const Container = tw.div`
w-screen
h-screen

flex
flex-col
gap-2

md:flex-row


`;

export const ExpenseWrapper = tw.div`
flex
flex-col

gap-2

md:flex-row
md:items-center
md:justify-between
`;
