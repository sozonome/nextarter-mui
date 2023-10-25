import type { TooltipProps } from '@mui/material';
import { Box, Tooltip } from '@mui/material';
import Image from 'next/image';

type HelperIconImageProps = {
  label: TooltipProps['title'];
  src: string;
};

const HelperIconImage = ({ label, src }: HelperIconImageProps) => (
  <Tooltip arrow aria-label={label as string} title={label}>
    <Box marginX={2}>
      <Image src={src} width={24} height={24} alt={label as string} />
    </Box>
  </Tooltip>
);

export default HelperIconImage;
