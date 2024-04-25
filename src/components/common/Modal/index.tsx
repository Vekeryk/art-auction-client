import React, { ReactNode } from 'react';
import { Fade, Modal, Paper } from '@mui/material';

interface IAppModal {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const AppModal: React.FC<IAppModal> = ({ children, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} keepMounted>
      <Fade in={open}>
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 3,
          }}
        >
          {children}
        </Paper>
      </Fade>
    </Modal>
  );
};

export default AppModal;
