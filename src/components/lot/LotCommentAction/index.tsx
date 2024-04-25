import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';

import MessageModal from '../../common/MessageModal';
import { authenticatedAction } from '../../../utils/users.ts';

interface ILotCommentAction {}

const LotCommentAction: React.FC<ILotCommentAction> = () => {
  const { lotId } = useParams();
  const [open, setOpen] = useState(false);

  if (!lotId) {
    return null;
  }

  return (
    <Stack alignItems="center" marginY={2}>
      <Button
        variant="contained"
        onClick={() => authenticatedAction(() => setOpen(true))}
      >
        Додати коментар
      </Button>
      <MessageModal
        title="Додати коментар"
        description="Ви долучаєтеся до обговорення"
        buttonText="Коментувати"
        inputPlaceholder="Що у вас на думці?"
        open={open}
        onClose={() => setOpen(false)}
        handleSubmit={() => {
          setOpen(false);
        }}
      />
    </Stack>
  );
};

export default LotCommentAction;
