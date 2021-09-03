import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => (
  <AppBar elevation={0} color="transparent" position="static">
    <Toolbar>
      <Grid container maxWidth="800px" marginX="auto">
        <Typography variant="h3">nextmui-starter</Typography>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Header;
