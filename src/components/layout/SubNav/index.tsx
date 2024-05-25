import React from 'react';

import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import CategoryList from '../../common/CategoryList';
import GlobalSearch from '../../common/GlobalSearch';
import { NAVIGATE_PATH } from '../../../helpers/constants.ts';
import logo from '../../../assets/images/logo.png';

const SubNav: React.FC = () => {
  return (
    <Box
      sx={{
        marginY: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          gap: 3,
        }}
      >
        <img src={logo} alt="" height={56} style={{ borderRadius: '5px' }} />
        <GlobalSearch />
        <Button
          sx={{ height: 54 }}
          variant="contained"
          component={RouterLink}
          to={NAVIGATE_PATH.createLot}
        >
          Створити лот
        </Button>
      </Box>
      <Box>
        <CategoryList />
      </Box>
    </Box>
  );
};

export default SubNav;
