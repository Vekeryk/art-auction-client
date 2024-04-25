import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useQuery } from 'react-query';
import { Control, Controller } from 'react-hook-form';

import { fetchCategories } from '../../../helpers/requests.ts';
import { CreateLotFromValues } from '../../../types.ts';
import { INPUT_PROPS } from '../../../helpers/constants.ts';

interface ICategorySelect {
  required?: boolean;
  control: Control<CreateLotFromValues>;
}

const CategorySelect: React.FC<ICategorySelect> = ({ required, control }) => {
  const { data: categories } = useQuery('categories', fetchCategories, {
    initialData: [],
  });

  return (
    <FormControl {...INPUT_PROPS}>
      <InputLabel id="category-select-label" required={required}>
        Категорія
      </InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={(event) => {
              onChange(
                categories?.find(
                  (category) => category.id === event.target.value,
                ),
              );
            }}
            value={value?.id ?? ''}
            required={required}
            labelId="category-select-label"
            label="Категорія"
            MenuProps={{ sx: { maxHeight: 300 } }}
          >
            {categories?.map((option, index) => (
              <MenuItem key={index} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        )}
        control={control}
        name="category"
      />
    </FormControl>
  );
};

export default CategorySelect;
