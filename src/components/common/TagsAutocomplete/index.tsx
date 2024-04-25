import React from 'react';
import { useQuery } from 'react-query';
import { Autocomplete, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { fetchTags } from '../../../helpers/requests.ts';
import { CreateLotFromValues } from '../../../types.ts';
import { INPUT_PROPS } from '../../../helpers/constants.ts';

interface ITagsSelect {
  required?: boolean;
  control: Control<CreateLotFromValues>;
}

const TagsAutocomplete: React.FC<ITagsSelect> = ({ control }) => {
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
              required={value.length == 0}
              {...INPUT_PROPS}
            />
          )}
        />
      )}
      control={control}
      defaultValue={[]}
      name="tags"
    />
  );
};

export default TagsAutocomplete;
