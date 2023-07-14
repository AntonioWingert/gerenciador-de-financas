const theme = {
  colors: {
    primary: 'text-gray-900',
    secondary: 'text-gray-100',
    danger: 'text-red-600',
  },
  'background-colors': {
    primary: 'bg-violet-700',
    secondary: 'bg-violet-300',
    danger: 'bg-red-600',
    success: 'bg-green-600',
  },
  'text-sizes': {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  },
} as const;

export default theme;
