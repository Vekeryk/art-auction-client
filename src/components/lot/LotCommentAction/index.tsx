import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';

import MessageModal from '../../common/MessageModal';
import { authenticatedAction } from '../../../utils/users.ts';
import { createComment } from '../../../helpers/requests.ts';
import { LotComment } from '../../../types.ts';

interface ILotCommentAction {
  onAddComment: (comment: LotComment) => void;
}

const LotCommentAction: React.FC<ILotCommentAction> = ({ onAddComment }) => {
  const { lotId } = useParams();
  const [open, setOpen] = useState(false);

  if (!lotId) {
    return null;
  }

  const handleSubmit = async (content: string) => {
    const comment = await createComment({ content, lotId });
    onAddComment(comment);
    setOpen(false);
  };

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
        handleSubmit={handleSubmit}
      />
    </Stack>
  );
};

export default LotCommentAction;
