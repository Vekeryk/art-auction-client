import React, { useState } from 'react';

import { Button, Stack, TextField, Typography } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import GroupsIcon from '@mui/icons-material/Groups';
import GavelIcon from '@mui/icons-material/Gavel';
import SellIcon from '@mui/icons-material/Sell';

import Timer from '../../common/Timer';
import CategoryAndTags from '../../common/CategoryAndTags';
import IconContainer from '../../common/IconContainer';
import { authenticatedAction } from '../../../utils/users.ts';
import { Lot } from '../../../types.ts';
import LotReportAction from '../LotReportAction';

interface ILotDetails {
  lot: Lot;
}

const LotDetails: React.FC<ILotDetails> = ({ lot }) => {
  const [bidAmount, setBidAmount] = useState(lot.currentPrice + 20);

  const handleBidSubmit = () => {
    console.log(`Submitting bid: ${bidAmount} for lot ${lot.id}`);
  };

  return (
    <Stack spacing={2} flexGrow={1}>
      <Stack spacing={2} flexGrow={1}>
        <Typography variant="h4">{lot.title}</Typography>
        <CategoryAndTags category={lot.category} tags={lot.tags} />
        <Stack spacing={2}>
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
          <IconContainer>
            <GroupsIcon />
            <Typography variant="h6">Стежить за лотом: 15 людей</Typography>
          </IconContainer>
        </Stack>
        <Stack component="form" direction="row" spacing={2} width="100%">
          <TextField
            label="Ваша ставка"
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(+e.target.value)}
            InputProps={{
              inputProps: { min: lot.currentPrice, max: 100000000 },
            }}
          />
          <Button
            onClick={() => authenticatedAction(handleBidSubmit)}
            variant="contained"
            color="primary"
            startIcon={<GavelIcon />}
          >
            Зробити ставку
          </Button>
        </Stack>
      </Stack>
      <LotReportAction />
    </Stack>
  );
};

export default LotDetails;