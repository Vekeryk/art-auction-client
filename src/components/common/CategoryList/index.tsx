import React from 'react';

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useQuery } from 'react-query';

import { fetchCategories } from '../../../helpers/requests.ts';

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
          <ListItemButton>
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
