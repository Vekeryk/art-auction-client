import React from 'react';
import { Box, Fade, Modal, Paper, Stack } from '@mui/material';

import Gallery from '../../common/Gallery';
import LotDetails from '../LotDetails';
import LotTabs from '../LotTabs';
import { CreateLotFromValues } from '../../../types.ts';
import { getPreviewLot } from '../../../utils/lots.ts';

interface ILotPreviewModal {
  lotValues: CreateLotFromValues;
  open: boolean;
  handleClose: () => void;
}

const LotPreviewModal: React.FC<ILotPreviewModal> = ({
  lotValues,
  open,
  handleClose,
}) => {
  const lot = getPreviewLot(lotValues);

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
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
        </Paper>
      </Fade>
    </Modal>
  );
};

export default LotPreviewModal;
