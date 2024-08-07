import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';

import AppModal from '../Modal';

interface IMessageModal {
  title: string;
  description: string;
  buttonText: string;
  inputPlaceholder: string;
  open: boolean;
  onClose: () => void;
  handleSubmit: (content: string) => void;
}

const MessageModal: React.FC<IMessageModal> = ({
  title,
  description,
  buttonText,
  inputPlaceholder,
  open,
  onClose,
  handleSubmit,
}) => {
  const [content, setContent] = useState('');

  return (
    <AppModal open={open} onClose={onClose}>
      <Stack spacing={2} component="form" sx={{ width: { xs: 300, md: 400 } }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={content}
          placeholder={inputPlaceholder}
          onChange={(event) => setContent(event.target.value)}
          margin="dense"
        />
        <Button
          disabled={!content}
          onClick={() => {
            handleSubmit(content);
            setContent('');
          }}
          variant="contained"
          sx={{ mt: 2, alignSelf: 'center' }}
        >
          {buttonText}
        </Button>
      </Stack>
    </AppModal>
  );
};

export default MessageModal;
