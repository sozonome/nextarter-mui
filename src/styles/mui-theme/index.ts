import { createTheme, responsiveFontSizes } from '@mui/material';
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

const theme = createTheme({
  typography: {
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
  },
});

export default responsiveFontSizes(theme);
