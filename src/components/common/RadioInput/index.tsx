import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { CreateLotFormValues, Option } from '../../../types.ts';

interface IRadioInput {
  name: keyof CreateLotFormValues;
  label: string;
  control: Control<CreateLotFormValues>;
  options: Option[];
}

const RadioInput: React.FC<IRadioInput> = ({
  name,
  control,
  label,
  options,
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        rules={{ required: true }}
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default RadioInput;
