import React, { ChangeEvent, useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormGroup,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import PictureWall from '../../components/common/PictureWall';
import CategorySelect from '../../components/common/CategorySelect';
import TagsAutocomplete from '../../components/common/TagsAutocomplete';
import DurationSelect from '../../components/common/DurationSelect';
import LotPreviewModal from '../../components/lot/LotPreviewModal';
import { createLot, uploadImage } from '../../helpers/requests.ts';
import {
  DEAL_TYPE_OPTIONS,
  DELIVERY_METHOD_OPTIONS,
  INPUT_PROPS,
  LOCATION_OPTIONS,
  PAYMENT_METHOD_OPTIONS,
} from '../../helpers/constants.ts';
import {
  CreateLot,
  CreateLotFormValues,
  DeliveryMethod,
  LotImage,
  PaymentMethod,
} from '../../types.ts';
import RadioInput from '../../components/common/RadioInput';
import CheckboxInput from '../../components/common/CheckboxInput';
import SelectInput from '../../components/common/SelectInput';

export const CreateLotPage: React.FC = () => {
  const [lotImages, setLotImages] = useState<LotImage[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<CreateLotFormValues>({
    defaultValues: {
      title: '',
      description: '',
      tags: [],
      startTime: new Date(),
    },
  });

  const createLotMutation = useMutation((data: Partial<CreateLot>) => {
    return createLot(data);
  });

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = event.target.files;
    if (targetFiles && targetFiles.length) {
      const file = targetFiles[0];
      const lotImage = await uploadImage(file);
      setLotImages([...lotImages, lotImage]);
    }
  };

  const handleDelete = (fileId: string) => {
    setLotImages(lotImages.filter(({ id }) => id !== fileId));
  };

  const onSubmit = (data: CreateLotFormValues) => {
    const createLot: Partial<CreateLot> = {
      ...data,
      categoryId: data.category?.id,
      tagIds: data.tags.map(({ id }) => id),
      imageIds: lotImages.map(({ id }) => id),
      startingPrice: +(data.startingPrice ?? 1),
      paymentMethods: Object.keys(data.paymentMethods) as PaymentMethod[],
      deliveryMethods: Object.keys(data.deliveryMethods) as DeliveryMethod[],
    };
    createLotMutation.mutate(createLot);
  };

  return (
    <Card sx={{ padding: 2 }} elevation={2}>
      <CardContent component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" component="div">
          Створення лота
        </Typography>
        <TextField
          label="Назва"
          required
          error={!!errors.title}
          helperText={errors.title?.message}
          {...register('title')}
          {...INPUT_PROPS}
        />
        <TextField
          label="Опис"
          helperText="Якомога детальніше опишіть предмет лота для інших користувачів"
          multiline
          rows={4}
          required
          error={!!errors.description}
          {...register('description')}
          {...INPUT_PROPS}
        />
        <CategorySelect control={control} name="category" required />
        <TagsAutocomplete control={control} name="tags" required />
        <SelectInput
          label="Місцерозташування лоту"
          name="location"
          control={control}
          options={LOCATION_OPTIONS}
          required
        />
        <Typography variant="subtitle2" sx={{ marginTop: 3 }}>
          Деталі торгів
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
            {...register('startingPrice')}
            error={!!errors.startingPrice}
            helperText={errors.startingPrice?.message}
            required
            {...INPUT_PROPS}
          />
          <Controller
            name="startTime"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DateTimePicker
                label="Час початку аукціону"
                value={value}
                onChange={onChange}
                slotProps={{ textField: { ...INPUT_PROPS } }}
              />
            )}
          />
          <DurationSelect control={control} />
        </Box>
        <Stack
          marginTop={3}
          gap={3}
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Способи доставки</FormLabel>
            <FormGroup title="Способи доставки">
              {DELIVERY_METHOD_OPTIONS.map((option) => (
                <CheckboxInput
                  label={option.label}
                  name={`deliveryMethods.${option.value as DeliveryMethod}`}
                  control={control}
                  key={option.value}
                />
              ))}
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Способи оплати</FormLabel>
            <FormGroup title="Способи оплати">
              {PAYMENT_METHOD_OPTIONS.map((option) => (
                <CheckboxInput
                  label={option.label}
                  name={`paymentMethods.${option.value as PaymentMethod}`}
                  control={control}
                  key={option.value}
                />
              ))}
            </FormGroup>
          </FormControl>
          <RadioInput
            control={control}
            name="dealType"
            label="Тип угоди"
            options={DEAL_TYPE_OPTIONS}
          />
        </Stack>
        <PictureWall
          lotImages={lotImages}
          handleFileChange={handleFileChange}
          handleDelete={handleDelete}
        />
        <Box sx={{ marginTop: 2, display: 'flex', gap: 3 }}>
          <Button variant="contained" type="submit">
            Виставити лот
          </Button>
          <Button onClick={() => setPreviewOpen(true)}>
            Попередній перегляд
          </Button>
        </Box>
      </CardContent>
      <LotPreviewModal
        lotValues={getValues()}
        lotImages={lotImages}
        open={previewOpen}
        handleClose={() => setPreviewOpen(false)}
      />
    </Card>
  );
};
