import { Box } from '@mui/material';
import type { ReactNode } from 'react';

import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Box marginX="auto">
    <Box
      paddingX={[2, 0]}
      paddingY={[2]}
      maxWidth={['100vw', '100vw', '85vw', '800px']}
      marginX="auto"
    >
      {children}
      <Footer />
    </Box>
  </Box>
);

export default Layout;
