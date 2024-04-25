import React from 'react';

import { Box, Paper, Stack } from '@mui/material';

import { Lot } from '../../types.ts';
import Gallery from '../../components/common/Gallery';
import LotTabs from '../../components/lot/LotTabs';
import LotDetails from '../../components/lot/LotDetails';

export const LotPage: React.FC = () => {
  const lot: Lot = {
    id: '1',
    name: 'Вінтажний Живопис (картина)',
    description:
      'Цей оригінальний живопис середини 20 століття, підписаний художником, є відмінним прикладом європейського мистецтва того періоду.',
    category: { id: '1', name: 'Живопис' },
    tags: [
      { id: '1', name: 'вінтаж' },
      { id: '2', name: 'Європа' },
      { id: '3', name: '20 століття' },
      { id: '4', name: 'олія' },
    ],
    images: [
      { id: '1', index: 1, image: 'src/assets/images/cool3.jpg' },
      { id: '2', index: 2, image: 'src/assets/images/duck3.jpg' },
      { id: '2', index: 2, image: 'src/assets/images/bear4.jpg' },
    ],
    startingPrice: 2000,
    currentPrice: 2500,
    startTime: '2024-04-15T09:00:00Z',
    endTime: '2024-04-27T10:00:00Z',
    comments: [
      {
        id: '1',
        content: 'Дуже красива робота, чудові кольори!',
        user: {
          id: 'user1',
          username: 'artlover',
          firstName: 'Олексій',
          lastName: 'Кравчук',
          profilePictureUrl: 'https://mui.com/static/images/avatar/2.jpg',
          createdAt: '2023-03-01T08:30:00Z',
        },
        createdAt: '2023-04-16T10:00:00Z',
      },
      {
        id: '2',
        content: 'Дуже гарна картина!',
        user: {
          id: '1',
          username: 'user1',
          firstName: 'Олександр',
          lastName: 'Іванов',
          profilePictureUrl: 'https://mui.com/static/images/avatar/1.jpg',
          createdAt: '2024-04-20T10:00:00',
        },
        createdAt: '2024-04-21T10:30:00',
      },
      {
        id: '3',
        content: 'На фото стан не дуже',
        user: {
          id: '8',
          username: 'vekeryk',
          firstName: 'Векерик',
          lastName: 'Денис',
          createdAt: '2024-04-20T10:00:00',
        },
        createdAt: '2024-04-21T10:30:00',
      },
    ],
    bids: [
      {
        id: 'bid1',
        amount: 2300,
        user: {
          id: 'user2',
          username: 'collector123',
          firstName: 'Марія',
          lastName: 'Бондаренко',
          profilePictureUrl: 'https://mui.com/static/images/avatar/3.jpg',
          createdAt: '2023-01-20T07:25:00Z',
        },
        createdAt: '2023-04-15T12:30:00Z',
      },
      {
        id: 'bid2',
        amount: 2500,
        user: {
          id: 'user3',
          username: 'vintageFan',
          firstName: 'Сергій',
          lastName: 'Петров',
          profilePictureUrl: 'https://mui.com/static/images/avatar/1.jpg',
          createdAt: '2023-02-11T11:00:00Z',
        },
        createdAt: '2023-04-16T15:45:00Z',
      },
    ],
    paymentMethods: ['Кредитна карта', 'PayPal', 'Банківський переказ'],
    deliveryMethods: ['Самовивіз', "Кур'єрська доставка", 'Поштові послуги'],
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-04-14T23:59:59Z',
  };

  return (
    <Stack spacing={3}>
      <Paper sx={{ padding: 2 }} elevation={2}>
        <Stack direction="row" spacing={2} flexGrow={1}>
          <Box sx={{ width: '50%' }}>
            <Gallery images={lot.images} />
          </Box>
          <LotDetails lot={lot} />
        </Stack>
      </Paper>
      <Paper>
        <LotTabs lot={lot} />
      </Paper>
    </Stack>
  );
};
