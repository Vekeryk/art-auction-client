import React from 'react';
import { useQuery } from 'react-query';
import { Stack, Typography } from '@mui/material';

import Loading from '../../components/layout/Loading';
import LotCard from '../../components/common/LotCard';
import useAppSelector from '../../hooks/useAppSelector.ts';
import { fetchUserLots } from '../../helpers/requests.ts';

export const UserLotsPage: React.FC = () => {
  const user = useAppSelector((state) => state.userReducer.user);
  const { data: lots, isLoading } = useQuery(['userLots'], () =>
    fetchUserLots(user!.id),
  );

  if (!lots || isLoading) {
    return <Loading />;
  }

  return (
    <Stack alignItems="center" minHeight="50vh">
      <Stack gap={2} width="100%" maxWidth={800} justifyItems="center">
        <Typography variant="h4">Мої лоти</Typography>
        {!lots.length && (
          <Typography variant="h4" textAlign="center">
            У вас ще немає лотів.
          </Typography>
        )}
        {lots.map((lot) => (
          <LotCard key={lot.id} lot={lot} />
        ))}
      </Stack>
    </Stack>
  );
};
