import React from 'react';

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { fetchCategories } from '../../../helpers/requests.ts';
import { NAVIGATE_PATH } from '../../../helpers/constants.ts';

const CategoryList: React.FC = () => {
  const {
    data: categories,
    isError,
    isLoading,
  } = useQuery(['categories'], () => fetchCategories());

  if (!categories || isError || isLoading) {
    return null;
  }

  return (
    <List sx={{ display: 'flex', overflowX: 'auto' }}>
      {categories.map((category) => (
        <ListItem key={category.id} disablePadding>
          <ListItemButton
            component={Link}
            to={NAVIGATE_PATH.lots}
            state={{ category }}
          >
            <ListItemText
              primary={category.name}
              sx={{ whiteSpace: 'nowrap', textAlign: 'center' }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
