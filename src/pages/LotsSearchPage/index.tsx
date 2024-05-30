import React, { useState } from 'react';

import {
  CircularProgress,
  Pagination,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import CategorySelect from '../../components/common/CategorySelect';
import TagsAutocomplete from '../../components/common/TagsAutocomplete';
import SelectInput from '../../components/common/SelectInput';
import LotCard from '../../components/common/LotCard';
import { SearchLotsFormValues, SearchLotsQuery } from '../../types.ts';
import { INPUT_PROPS, LOCATION_OPTIONS } from '../../helpers/constants.ts';
import { fetchFilteredLots } from '../../helpers/requests.ts';

export const LotsSearchPage: React.FC = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const { category } = location.state || {};

  const { control, watch, getValues } = useForm<SearchLotsFormValues>({
    defaultValues: {
      category: category,
    },
  });
  const searchWatch = watch(['category', 'tags', 'location']);

  const { data: pageableLots, isLoading } = useQuery(
    ['filteredLots', searchWatch, page],
    () => {
      const values = getValues();
      const query: Partial<SearchLotsQuery> = {
        categoryId: values.category?.id,
        tagIds: values.tags?.map((tag) => tag.id),
        location: values.location,
        page,
        limit: 10,
      };
      return fetchFilteredLots(query);
    },
  );

  return (
    <Stack gap={4} sx={{ display: 'flex', flexDirection: { md: 'row' } }}>
      <Stack
        sx={{
          minWidth: { md: 300 },
          maxWidth: { md: 300 },
        }}
      >
        <CategorySelect control={control} name="category" clearOption />
        <TagsAutocomplete control={control} name="tags" />
        <SelectInput
          label="Місцерозташування лоту"
          name="location"
          control={control}
          options={LOCATION_OPTIONS}
          clearOption
        />
        <TextField
          type="number"
          label="Стартова ціна (грн.)"
          InputProps={{ inputProps: { min: 1, max: 100000000 } }}
          required
          {...INPUT_PROPS}
        />
      </Stack>
      <Stack gap={2} flexGrow={1}>
        {isLoading && (
          <CircularProgress size={80} sx={{ alignSelf: 'center' }} />
        )}
        {!isLoading && !pageableLots?.lots.length && (
          <Typography variant="h5" textAlign="center">
            Лотів не знайдено.
          </Typography>
        )}
        {pageableLots?.lots.map((lot) => <LotCard key={lot.id} lot={lot} />)}
        {!!pageableLots?.lots.length && (
          <Pagination
            sx={{ alignSelf: 'center' }}
            count={Math.ceil((pageableLots?.count || 0) / 10)}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
            style={{ marginTop: '20px' }}
          />
        )}
      </Stack>
    </Stack>
  );
};
