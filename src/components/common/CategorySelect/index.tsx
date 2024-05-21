import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useQuery } from 'react-query';
import { Controller, FieldValues } from 'react-hook-form';

import { fetchCategories } from '../../../helpers/requests.ts';
import { INPUT_PROPS } from '../../../helpers/constants.ts';
import { GenericFormControl } from '../../../types.ts';

function CategorySelect<T extends FieldValues>({
  required,
  control,
  name,
  clearOption,
}: GenericFormControl<T>) {
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
                ) ?? null,
              );
            }}
            value={value?.id ?? ''}
            required={required}
            labelId="category-select-label"
            label="Категорія"
            MenuProps={{ sx: { maxHeight: 300 } }}
          >
            {clearOption && <MenuItem value={''}>Усі категорії</MenuItem>}
            {categories?.map((option, index) => (
              <MenuItem key={index} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
}

export default CategorySelect;
