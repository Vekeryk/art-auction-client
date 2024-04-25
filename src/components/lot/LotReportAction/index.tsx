import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { useParams } from 'react-router-dom';

import MessageModal from '../../common/MessageModal';
import { authenticatedAction } from '../../../utils/users.ts';

interface ILotReportAction {}

const LotReportAction: React.FC<ILotReportAction> = () => {
  const { lotId } = useParams();
  const [open, setOpen] = useState(false);

  if (!lotId) {
    return null;
  }

  return (
    <Stack>
      <Button
        onClick={() => authenticatedAction(() => setOpen(true))}
        variant="text"
        color="warning"
        sx={{ alignSelf: 'end', justifySelf: 'end' }}
        startIcon={<WarningIcon />}
      >
        Повідомити про порушення
      </Button>
      <MessageModal
        title="Повідомити про порушення"
        description="Модерація розгляне ваше звернення"
        buttonText="Надіслати"
        inputPlaceholder="Що не так з цим лотом?"
        open={open}
        onClose={() => setOpen(false)}
        handleSubmit={() => {
          setOpen(false);
        }}
      />
    </Stack>
  );
};

export default LotReportAction;
