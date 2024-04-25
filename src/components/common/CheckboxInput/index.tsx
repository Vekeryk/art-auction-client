import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Control, Controller, FieldPath } from 'react-hook-form';

import { CreateLotFromValues } from '../../../types.ts';

interface ICheckboxInput {
  name: FieldPath<CreateLotFromValues>;
  label: string;
  control: Control<CreateLotFromValues>;
}

const CheckboxInput: React.FC<ICheckboxInput> = ({ name, control, label }) => {
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} />}
        />
      }
      label={label}
    />
  );
};

export default CheckboxInput;
