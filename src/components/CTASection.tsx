/* eslint-disable @next/next/no-img-element */
import { GitHub as GithubIcon } from '@mui/icons-material';
import { Button, Link, Stack } from '@mui/material';

const CTASection = () => (
  <Stack textAlign="center" spacing={2}>
    <Stack justifyContent="center" direction="row" spacing={2}>
      <Link
        target="_blank"
        href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-mui"
      >
        <img src="https://vercel.com/button" alt="deploy to vercel" />
      </Link>
      <Link href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-mui">
        <img
          src="https://www.netlify.com/img/deploy/button.svg"
          alt="deploy to netlify"
        />
      </Link>
    </Stack>

    <Stack spacing={2} direction="row" justifyContent="center">
      <Button
        component={Link}
        variant="outlined"
        target="_blank"
        href="https://github.com/sozonome/nextarter-mui/generate"
      >
        Use This Template
      </Button>
      <Button
        component={Link}
        href="https://github.com/sozonome/nextarter-mui"
        target="_blank"
        startIcon={<GithubIcon />}
      >
        Open in Github
      </Button>
    </Stack>
  </Stack>
);

export default CTASection;
