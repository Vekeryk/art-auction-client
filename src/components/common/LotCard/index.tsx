import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import SellIcon from '@mui/icons-material/Sell';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { Link } from 'react-router-dom';

import CategoryAndTags from '../CategoryAndTags';
import IconContainer from '../IconContainer';
import Timer from '../Timer';
import { Lot } from '../../../types.ts';
import { getPicturePath } from '../../../utils/lots.ts';
import { ELLIPSIS_STYLES, NAVIGATE_PATH } from '../../../helpers/constants.ts';

interface ILotCard {
  lot: Lot;
}

const LotCard: React.FC<ILotCard> = ({ lot }) => {
  return (
    <Card sx={{ height: '100%' }}>
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
  );
};

export default LotCard;
