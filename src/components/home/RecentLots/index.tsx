import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getPicturePath } from '../../../utils/lots.ts';
import { fetchLots } from '../../../helpers/requests.ts';
import { ELLIPSIS_STYLES, NAVIGATE_PATH } from '../../../helpers/constants.ts';

const RecentLots: React.FC = () => {
  const navigate = useNavigate();
  const { data: lots, isLoading } = useQuery('lots', fetchLots);

  if (!lots || isLoading) {
    return (
      <Stack alignItems="center">
        <CircularProgress size={80} />
      </Stack>
    );
  }

  return (
    <Grid container spacing={4}>
      {lots.map((lot, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Card sx={{ height: '100%' }}>
            <CardActionArea
              sx={{ height: '100%' }}
              onClick={() => navigate(NAVIGATE_PATH.lot(lot.id))}
            >
              <CardMedia
                component="img"
                height="200"
                image={getPicturePath(lot.images[0].image)}
                alt={lot.title}
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography
                  sx={{ ...ELLIPSIS_STYLES, WebkitLineClamp: '2' }}
                  variant="h6"
                  component="h2"
                >
                  {lot.title}
                </Typography>
                <Typography sx={{ ...ELLIPSIS_STYLES, WebkitLineClamp: '4' }}>
                  {lot.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecentLots;
