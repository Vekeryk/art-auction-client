import React from 'react';

import { Stack, Typography } from '@mui/material';

import Landing from '../../components/home/Landing';
import RecentLots from '../../components/home/RecentLots';

export const HomePage: React.FC = () => {
  return (
    <Stack>
      <Landing />
      <Typography variant="h4" component="h1" gutterBottom>
        Актуальні лоти
      </Typography>
      <RecentLots />
    </Stack>
  );
};
