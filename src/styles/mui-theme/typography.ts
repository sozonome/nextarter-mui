import { ThemeOptions } from '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

const systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const heading: TypographyStyleOptions = {
  fontFamily: ['"Plus Jakarta Sans"', ...systemFont].join(','),
  fontWeight: 'bold',
};

export const typography: ThemeOptions['typography'] = {
  fontFamily: ['"IBM Plex Sans"', ...systemFont].join(','),
  h1: {
    ...heading,
  },
  h2: {
    ...heading,
  },
  h3: {
    ...heading,
  },
  h4: {
    ...heading,
  },
  h5: {
    ...heading,
  },
  h6: {
    ...heading,
  },
};
