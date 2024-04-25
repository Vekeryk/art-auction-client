import React from 'react';
import { Box, Fade, Modal, Paper, Stack } from '@mui/material';

import Gallery from '../../common/Gallery';
import LotDetails from '../LotDetails';
import LotTabs from '../LotTabs';
import { CreateLotFromValues, LotImage } from '../../../types.ts';
import { getPreviewLot } from '../../../utils/lots.ts';

interface ILotPreviewModal {
  lotValues: CreateLotFromValues;
  lotImages: LotImage[];
  open: boolean;
  handleClose: () => void;
}

const LotPreviewModal: React.FC<ILotPreviewModal> = ({
  lotValues,
  lotImages,
  open,
  handleClose,
}) => {
  const lot = getPreviewLot(lotValues, lotImages);

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Paper
          sx={{
            p: 4,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '80vh',
            width: '80vw',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            overflow: 'scroll',
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
