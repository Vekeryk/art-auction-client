import React from 'react';

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import GlobalSearch from '../../common/GlobalSearch';
import { CATEGORIES, NAVIGATE_PATH } from '../../../helpers/constants.ts';

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
        <img
          src="/src/assets/images/logo.png"
          alt=""
          height={56}
          style={{ borderRadius: '5px' }}
        />
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
        <List sx={{ display: 'flex', overflowX: 'auto' }}>
          {CATEGORIES.map((category) => (
            <ListItem key={category.id} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={category.name}
                  sx={{ whiteSpace: 'nowrap', textAlign: 'center' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SubNav;
