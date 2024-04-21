import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Lot } from '../../types.ts';

export const LotPage: React.FC = () => {
  const lot: Lot = {
    id: '1',
    name: 'Вінтажний Живопис (картина)',
    description:
      'Цей оригінальний живопис середини 20 століття, підписаний художником, є відмінним прикладом європейського мистецтва того періоду.',
    category: 'Живопис',
    tags: ['вінтаж', 'Європа', '20 століття', 'олія'],
    images: [
      'https://picsum.photos/700/1100',
      'https://picsum.photos/1200/500',
    ],
    startPrice: 2000,
    currentPrice: 2500,
    startTime: '2023-04-15T09:00:00Z',
    endTime: '2023-04-22T12:00:00Z',
    comments: [
      {
        id: '1',
        content: 'Дуже красива робота, чудові кольори!',
        user: {
          id: 'user1',
          username: 'artlover',
          firstName: 'Олексій',
          lastName: 'Кравчук',
          profilePictureUrl: 'https://via.placeholder.com/150',
          createdAt: '2023-03-01T08:30:00Z',
        },
        createdAt: '2023-04-16T10:00:00Z',
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
          profilePictureUrl: 'https://via.placeholder.com/150',
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
          profilePictureUrl: 'https://via.placeholder.com/150',
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

  const [bidAmount, setBidAmount] = useState('');

  const handleBidSubmit = () => {
    // Add logic to submit bid
    console.log(`Submitting bid: ${bidAmount} for lot ${lot.id}`);
    setBidAmount('');
  };

  return (
    <Stack spacing={3}>
      <Paper></Paper>
      <Typography variant="h4">{lot.name}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {lot.description}
      </Typography>
      <Typography variant="h6" sx={{ mt: 1 }}>
        Starting Price: ${lot.startPrice}
      </Typography>
      <Typography variant="h6" sx={{ mt: 1 }}>
        Current Price: ${lot.currentPrice}
      </Typography>
      <Box sx={{ mt: 2 }}>
        {lot.images.map((image, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 345, display: 'inline-block', m: 1 }}
          >
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt={`Image ${index + 1}`}
            />
          </Card>
        ))}
      </Box>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField
          label="Your Bid"
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          fullWidth
        />
        <Button
          onClick={handleBidSubmit}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Place Bid
        </Button>
      </Box>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Bids
      </Typography>
      <List>
        {lot.bids.map((bid) => (
          <ListItem key={bid.id}>
            <Typography>
              {bid.user.username}: ${bid.amount}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Comments
      </Typography>
      <List>
        {lot.comments.map((comment) => (
          <React.Fragment key={comment.id}>
            <ListItem alignItems="flex-start">
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle2">
                  {comment.user.username}
                </Typography>
                <Typography variant="body2">{comment.content}</Typography>
              </Box>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Stack>
  );
};
