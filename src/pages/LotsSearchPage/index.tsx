import React, { useState } from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import SellIcon from '@mui/icons-material/Sell';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

import CategoryAndTags from '../../components/common/CategoryAndTags';
import CategorySelect from '../../components/common/CategorySelect';
import IconContainer from '../../components/common/IconContainer';
import TagsAutocomplete from '../../components/common/TagsAutocomplete';
import Timer from '../../components/common/Timer';
import SelectInput from '../../components/common/SelectInput';
import { SearchLotsFormValues, SearchLotsQuery } from '../../types.ts';
import {
  ELLIPSIS_STYLES,
  LOCATION_OPTIONS,
  NAVIGATE_PATH,
} from '../../helpers/constants.ts';
import { fetchFilteredLots } from '../../helpers/requests.ts';
import { getPicturePath } from '../../utils/lots.ts';

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
      </Stack>
      <Stack gap={4} flexGrow={1}>
        {isLoading && (
          <CircularProgress size={80} sx={{ alignSelf: 'center' }} />
        )}
        {!isLoading && !pageableLots?.lots.length && (
          <Typography variant="h5" textAlign="center">
            Лотів не знайдено.
          </Typography>
        )}
        {pageableLots?.lots.map((lot) => (
          <Card sx={{ height: '100%' }} key={lot.id}>
            <CardActionArea
              component={Link}
              to={NAVIGATE_PATH.lot(lot.id)}
              sx={{ height: '100%', display: 'flex', userSelect: 'text' }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: 100, md: 250 },
                  height: { xs: 100, md: 250 },
                  objectFit: 'contain',
                  backgroundColor: 'gray',
                }}
                image={getPicturePath(lot.images[0].image)}
                alt={lot.title}
              />
              <CardContent sx={{ height: '100%', flexGrow: 1 }}>
                <Typography variant="h5" marginBottom={1}>
                  {lot.title}
                </Typography>
                <CategoryAndTags category={lot.category} tags={lot.tags} />
                <IconContainer>
                  <SellIcon />
                  <Typography variant="h6">
                    Поточна ціна: {lot.currentPrice ?? lot.startingPrice} грн.
                  </Typography>
                </IconContainer>
                <IconContainer>
                  <HourglassBottomIcon />
                  <Typography variant="h6">До завершення: </Typography>
                  <Timer endTime={lot.endTime} />
                </IconContainer>
                <Typography sx={{ ...ELLIPSIS_STYLES, WebkitLineClamp: '4' }}>
                  {lot.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
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
