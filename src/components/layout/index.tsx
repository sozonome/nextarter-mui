import { Box } from '@mui/material';
import { ReactNode } from 'react';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box marginX="auto">
    <Header />
    <Box
      padding={2}
      maxWidth={['100vw', '100vw', '85vw', '800px']}
      marginX="auto"
    >
      {children}
    </Box>
  </Box>
);

export default Layout;
