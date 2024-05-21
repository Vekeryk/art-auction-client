import { useQuery } from 'react-query';
import { Autocomplete, TextField } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';

import { fetchTags } from '../../../helpers/requests.ts';
import { GenericFormControl } from '../../../types.ts';
import { INPUT_PROPS } from '../../../helpers/constants.ts';

function TagsAutocomplete<T extends FieldValues>({
  required,
  control,
  name,
}: GenericFormControl<T>) {
  const { data: tags } = useQuery('tags', fetchTags);

  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          multiple
          filterSelectedOptions
          options={tags ?? []}
          getOptionLabel={(option) => option.name}
          onChange={(_e, data) => onChange(data)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Теги"
              placeholder="Пошук пов'язаних тегів"
              required={required && value.length == 0}
              {...INPUT_PROPS}
            />
          )}
        />
      )}
      control={control}
      name={name}
    />
  );
}

export default TagsAutocomplete;
