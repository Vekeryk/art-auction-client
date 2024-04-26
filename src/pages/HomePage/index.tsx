import React from 'react';

import { Stack } from '@mui/material';

import Landing from '../../components/home/Landing';
import RecentLots from '../../components/home/RecentLots';

export const HomePage: React.FC = () => {
  return (
    <Stack>
      <Landing />
      <RecentLots />
    </Stack>
  );
};
