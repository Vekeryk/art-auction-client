import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { NAVIGATE_PATH } from '../../../helpers/constants.ts';

const Landing: React.FC = () => {
  return (
    <Box
      sx={{
        marginBottom: 3,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
      }}
    >
      <Stack>
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
          Зареєструйтеся і ви готові брати участь в аукціонах! Відслідковуйте
          цікаві лоти та робіть ставки в реальному часі.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          sx={{ alignSelf: 'start' }}
          component={Link}
          to={NAVIGATE_PATH.about}
        >
          Дізнатися більше
        </Button>
      </Stack>
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
  );
};

export default Landing;
