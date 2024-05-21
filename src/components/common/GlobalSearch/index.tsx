import React, { useState } from 'react';

import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { searchLotsByTitle } from '../../../helpers/requests.ts';
import { NAVIGATE_PATH } from '../../../helpers/constants.ts';

interface IGlobalSearch {}

const GlobalSearch: React.FC<IGlobalSearch> = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [open, setOpen] = React.useState(false);

  const { data: lots = [], isLoading } = useQuery(
    ['searchedLots', search],
    async () => {
      if (search.length < 3) {
        setOpen(false);
        return [];
      }
      const lotsByTitle = await searchLotsByTitle(search);
      setOpen(true);
      return lotsByTitle;
    },
  );

  return (
    <Autocomplete
      open={open}
      forcePopupIcon={false}
      options={lots}
      sx={{ flexGrow: 1 }}
      loading={isLoading}
      loadingText="Loading..."
      getOptionLabel={(option) => option.title}
      onInputChange={(_, value) => setSearch(value)}
      renderOption={(props, option) => (
        <li
          {...props}
          key={option.id}
          onClick={() => navigate(NAVIGATE_PATH.lot(option.id))}
        >
          {option.title}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Пошук лотів"
          InputProps={{
            ...params.InputProps,
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
