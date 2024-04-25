import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { CreateLotFromValues, Option } from '../../../types.ts';
import { INPUT_PROPS } from '../../../helpers/constants.ts';

interface ISelectInput {
  required?: boolean;
  name: keyof CreateLotFromValues;
  label: string;
  control: Control<CreateLotFromValues>;
  options: Option[];
}

const SelectInput: React.FC<ISelectInput> = ({
  label,
  name,
  required,
  control,
  options,
}) => {
  return (
    <FormControl {...INPUT_PROPS}>
      <InputLabel id={`${name}-select-label`} required={required}>
        {label}
      </InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={onChange}
            value={value ?? ''}
            required={required}
            labelId={`${name}-select-label`}
            label={label}
            MenuProps={{ sx: { maxHeight: 300 } }}
          >
            {options?.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export default SelectInput;
