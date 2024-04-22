import React from 'react';

import { Box, Chip } from '@mui/material';

import { Category, Tag } from '../../../types.ts';

interface ICategoryAndTags {
  category: Category;
  tags: Tag[];
}

const CategoryAndTags: React.FC<ICategoryAndTags> = ({ category, tags }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      <Chip label={category.name} color="primary" />
      {tags.map((tag) => (
        <Chip key={tag.id} label={tag.name} />
      ))}
    </Box>
  );
};

export default CategoryAndTags;
