import React, { ReactNode } from 'react';

import { Stack } from '@mui/material';

interface IIconContainer {
  children: ReactNode;
}

const IconContainer: React.FC<IIconContainer> = ({ children }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {children}
    </Stack>
  );
};

export default IconContainer;
