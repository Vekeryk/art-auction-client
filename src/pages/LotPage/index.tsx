import React from 'react';

import { Box, Paper, Stack } from '@mui/material';

import Gallery from '../../components/common/Gallery';
import LotTabs from '../../components/lot/LotTabs';
import LotDetails from '../../components/lot/LotDetails';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchLot } from '../../helpers/requests.ts';
import Loading from '../../components/layout/Loading';
import { SocketProvider } from '../../context/SocketProvider';

export const LotPage: React.FC = () => {
  const { lotId } = useParams();
  const {
    data: lot,
    isError,
    isLoading,
  } = useQuery(['lot', { lotId }], () => fetchLot(lotId));

  if (!lot || isLoading || isError) {
    return <Loading />;
  }

  return (
    <SocketProvider lot={lot}>
      <Stack spacing={3}>
        <Paper sx={{ padding: 2 }} elevation={2}>
          <Stack direction="row" spacing={2} flexGrow={1}>
            <Box sx={{ width: '50%' }}>
              <Gallery images={lot.images} />
            </Box>
            <LotDetails lot={lot} />
          </Stack>
        </Paper>
        <Paper>
          <LotTabs lot={lot} />
        </Paper>
      </Stack>
    </SocketProvider>
  );
};
