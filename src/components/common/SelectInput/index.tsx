import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Option } from '../../../types.ts';
import { INPUT_PROPS } from '../../../helpers/constants.ts';

interface ISelectInput<T extends FieldValues> {
  required?: boolean;
  name: Path<T>;
  label: string;
  control: Control<T>;
  options: Option[];
  clearOption?: boolean;
}

function SelectInput<T extends FieldValues>({
  label,
  name,
  required,
  control,
  options,
  clearOption,
}: ISelectInput<T>) {
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
            {clearOption && <MenuItem value={undefined}>Усі можливі</MenuItem>}
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
}

export default SelectInput;
