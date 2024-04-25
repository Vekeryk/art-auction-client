import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import {
  AUCTION_DURATIONS_IN_DAYS,
  INPUT_PROPS,
} from '../../../helpers/constants.ts';
import { Control, Controller } from 'react-hook-form';
import { CreateLotFromValues } from '../../../types.ts';

interface IDurationSelect {
  required?: boolean;
  control: Control<CreateLotFromValues>;
}

const DurationSelect: React.FC<IDurationSelect> = ({ control }) => {
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <TextField
          select
          label="Тривалість торгів (днів)"
          defaultValue=""
          value={value ?? ''}
          onChange={onChange}
          required
          {...INPUT_PROPS}
        >
          {AUCTION_DURATIONS_IN_DAYS.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
      control={control}
      name="durationInDays"
    />
  );
};

export default DurationSelect;
