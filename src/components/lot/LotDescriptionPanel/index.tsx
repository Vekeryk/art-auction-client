import React from 'react';

import { Stack, Typography } from '@mui/material';

import { Lot } from '../../../types.ts';

interface ILotDescriptionPanel {
  lot: Lot;
  index: number;
  currentTabIndex: number;
}

const LotDescriptionPanel: React.FC<ILotDescriptionPanel> = ({
  lot,
  index,
  currentTabIndex,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={index !== currentTabIndex}
      style={{ minHeight: 150 }}
    >
      <Stack padding={2} spacing={1}>
        <Typography variant="h6">Опис:</Typography>
        <Typography>{lot.description}</Typography>
        <Typography variant="h6">Тип угоди:</Typography>
        <Typography>Післяоплата</Typography>
        <Typography variant="h6">Способи оплати:</Typography>
        <Typography>{lot.paymentMethods.join(', ')}</Typography>
        <Typography variant="h6">Розташування:</Typography>
        <Typography>Івано-Франківська область</Typography>
        <Typography variant="h6">Доставка:</Typography>
        <Typography>{lot.deliveryMethods.join(', ')}</Typography>
      </Stack>
    </div>
  );
};

export default LotDescriptionPanel;
