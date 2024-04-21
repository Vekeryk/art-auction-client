import React from 'react';

import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Арт Аукціон
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
