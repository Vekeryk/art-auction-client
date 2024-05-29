import React from 'react';

import { Button, Stack, TextField, Typography } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import GroupsIcon from '@mui/icons-material/Groups';
import GavelIcon from '@mui/icons-material/Gavel';
import SellIcon from '@mui/icons-material/Sell';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

import Timer from '../../common/Timer';
import CategoryAndTags from '../../common/CategoryAndTags';
import IconContainer from '../../common/IconContainer';
import { authenticatedAction } from '../../../utils/users.ts';
import { Lot, LotStatus } from '../../../types.ts';
import LotReportAction from '../LotReportAction';
import useBidding from '../../../hooks/useBidding.ts';
import useAppSelector from '../../../hooks/useAppSelector.ts';

interface ILotDetails {
  lot: Lot;
  preview?: boolean;
}

const LotDetails: React.FC<ILotDetails> = ({ lot, preview }) => {
  const {
    currentPrice,
    userBidAmount,
    setUserBidAmount,
    handlePlaceBid,
    usersCount,
  } = useBidding(preview ? null : lot);
  const user = useAppSelector((state) => state.userReducer.user);

  return (
    <Stack spacing={2} flexGrow={1}>
      <Stack spacing={2} flexGrow={1}>
        <Typography variant="h4">{lot.title}</Typography>
        <CategoryAndTags category={lot.category} tags={lot.tags} />
        <Stack spacing={2}>
          <IconContainer>
            <SellIcon />
            <Typography variant="h6">
              Поточна ціна: {currentPrice ?? lot.startingPrice} грн.
            </Typography>
          </IconContainer>
          <IconContainer>
            <HourglassBottomIcon />
            <Typography variant="h6">До завершення: </Typography>
            <Timer endTime={lot.endTime} />
          </IconContainer>
          {usersCount && (
            <IconContainer>
              <GroupsIcon />
              <Typography variant="h6">
                Стежить за лотом: {usersCount} людей
              </Typography>
            </IconContainer>
          )}
        </Stack>
        {lot.status === LotStatus.ACTIVE && lot.user.id !== user?.id && (
          <Stack component="form" direction="row" spacing={2} width="100%">
            <TextField
              label="Ваша ставка"
              type="number"
              value={userBidAmount}
              onChange={(e) => setUserBidAmount(+e.target.value)}
              InputProps={{
                inputProps: { min: lot.currentPrice, max: 100000000 },
              }}
            />
            <Button
              onClick={() => authenticatedAction(handlePlaceBid)}
              variant="contained"
              color="primary"
              startIcon={<GavelIcon />}
            >
              Зробити ставку
            </Button>
          </Stack>
        )}
      </Stack>
      <Stack justifyContent="right" flexWrap="wrap" direction="row" spacing={1}>
        {lot.user.id === user?.id && (
          <Button
            onClick={() => authenticatedAction(() => {})}
            variant="text"
            color="error"
            sx={{ alignSelf: 'end', justifySelf: 'end' }}
            startIcon={<NotInterestedIcon />}
          >
            Зняти з торгів
          </Button>
        )}
        <LotReportAction />
      </Stack>
    </Stack>
  );
};

export default LotDetails;
