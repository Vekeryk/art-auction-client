import React from 'react';

import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import {
  AUCTION_DURATIONS_IN_DAYS,
  CATEGORIES,
  INPUT_PROPS,
} from '../../helpers/constants.ts';
import { DateTimePicker } from '@mui/x-date-pickers';
import PictureWall from '../../components/common/PictureWall';

export const CreateLotPage: React.FC = () => {
  return (
    <Card sx={{ padding: 2 }} elevation={2}>
      <CardContent>
        <Typography variant="h5" component="div">
          Створення лота
        </Typography>
        <TextField label="Назва" required {...INPUT_PROPS} />
        <TextField
          label="Опис"
          helperText="Якомога детальніше опишіть предмет лота для інших користувачів"
          multiline
          rows={4}
          required
          {...INPUT_PROPS}
        />
        <TextField select label="Категорія" required {...INPUT_PROPS}>
          {CATEGORIES.map((option, index) => (
            <MenuItem key={index} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <Autocomplete
          multiple
          filterSelectedOptions
          options={CATEGORIES}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Теги"
              placeholder="Пошук пов'язаних тегів"
              required
              {...INPUT_PROPS}
            />
          )}
        />
        <Typography variant="subtitle2" sx={{ marginTop: 3 }}>
          Деталі торгів
        </Typography>
        <Typography variant="body2">
          (ви можете залиши ці поля порожніми для створення неактивного лота)
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            columnGap: 3,
          }}
        >
          <TextField
            type="number"
            label="Стартова ціна (грн.)"
            InputProps={{ inputProps: { min: 1, max: 100000000 } }}
            {...INPUT_PROPS}
          />
          <DateTimePicker
            label="Час початку аукціону"
            slotProps={{ textField: { ...INPUT_PROPS } }}
          />
          <TextField select label="Тривалість торгів (днів)" {...INPUT_PROPS}>
            {AUCTION_DURATIONS_IN_DAYS.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <PictureWall />
        <Box sx={{ marginTop: 2, display: 'flex', gap: 3 }}>
          <Button variant="contained">Виставити лот</Button>
          <Button>Попередній перегляд</Button>
        </Box>
      </CardContent>
    </Card>
  );
};
