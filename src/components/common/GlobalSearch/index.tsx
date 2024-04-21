import React from 'react';
import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Search } from '@mui/icons-material';

interface IGlobalSearch {}

const GlobalSearch: React.FC<IGlobalSearch> = () => {
  return (
    <Autocomplete
      freeSolo
      options={[]}
      sx={{ flexGrow: 1 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Пошук лотів"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="search">
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default GlobalSearch;
