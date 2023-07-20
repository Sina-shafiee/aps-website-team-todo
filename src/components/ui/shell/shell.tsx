import type { PropsWithChildren } from 'react';
import Box, { type BoxProps } from '@mui/material/Box';

type Props = PropsWithChildren<BoxProps> & {};

export const Shell = ({ children, component, ...props }: Props) => {
  return (
    <Box sx={{ py: 2 }} component={component ?? 'main'} {...props}>
      {children}
    </Box>
  );
};
