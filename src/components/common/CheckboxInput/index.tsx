import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Control, Controller, FieldPath } from 'react-hook-form';

import { CreateLotFormValues } from '../../../types.ts';

interface ICheckboxInput {
  name: FieldPath<CreateLotFormValues>;
  label: string;
  control: Control<CreateLotFormValues>;
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
