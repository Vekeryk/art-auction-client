import React from 'react';

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const featuredAuctions = [
  {
    id: 1,
    title: 'Антикварні Вази',
    description: 'Колекція рідкісних ваз XIX століття.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Вінтажні Автомобілі',
    description: 'Класичні автомобілі 1960-х років та старші.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Сучасне Мистецтво',
    description: "Арт-об'єкти відомих сучасних художників.",
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 1,
    title: 'Антикварні Вази',
    description: 'Колекція рідкісних ваз XIX століття.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Вінтажні Автомобілі',
    description: 'Класичні автомобілі 1960-х років та старші.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Сучасне Мистецтво',
    description: "Арт-об'єкти відомих сучасних художників.",
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 1,
    title: 'Антикварні Вази',
    description: 'Колекція рідкісних ваз XIX століття.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Вінтажні Автомобілі',
    description: 'Класичні автомобілі 1960-х років та старші.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Сучасне Мистецтво',
    description: "Арт-об'єкти відомих сучасних художників.",
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 1,
    title: 'Антикварні Вази',
    description: 'Колекція рідкісних ваз XIX століття.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Вінтажні Автомобілі',
    description: 'Класичні автомобілі 1960-х років та старші.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Сучасне Мистецтво',
    description: "Арт-об'єкти відомих сучасних художників.",
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 1,
    title: 'Антикварні Вази',
    description: 'Колекція рідкісних ваз XIX століття.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Вінтажні Автомобілі',
    description: 'Класичні автомобілі 1960-х років та старші.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Сучасне Мистецтво',
    description: "Арт-об'єкти відомих сучасних художників.",
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export const HomePage: React.FC = () => {
  return (
    <div>
      <Box
        sx={{
          marginBottom: 3,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
        }}
      >
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Ласкаво просимо на Арт Аукціон!
          </Typography>
          <Typography paragraph>
            Дослідіть світ унікальних та рідкісних предметів. Приєднуйтеся до
            наших аукціонів та отримайте можливість виграти неймовірні лоти!
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
            Як це працює?
          </Typography>
          <Typography paragraph>
            Зареєструйтеся, додайте свій платіжний метод, і ви готові брати
            участь в аукціонах! Відслідковуйте улюблені лоти та ставте ставки в
            реальному часі.
          </Typography>
          <Button variant="contained" color="primary">
            Дізнатись більше
          </Button>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 280,
            maxWidth: 520,
            display: { xs: 'none', md: 'flex' },
            overflow: 'hidden',
          }}
        >
          <img
            src="/src/assets/images/banner.webp"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: 5,
            }}
          />
        </Box>
      </Box>

      <Grid container spacing={4}>
        {featuredAuctions.map((auction, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={auction.imageUrl}
                  alt={auction.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {auction.title}
                  </Typography>
                  <Typography>{auction.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
