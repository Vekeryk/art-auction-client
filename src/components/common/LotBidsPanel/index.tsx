import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { Bid } from '../../../types.ts';
import { toDateTimeString } from '../../../utils/dates.ts';
import { getUserName } from '../../../utils/users.ts';

interface ILotBidsPanel {
  bids: Bid[];
  index: number;
  currentTabIndex: number;
}

const LotBidsPanel: React.FC<ILotBidsPanel> = ({
  bids,
  index,
  currentTabIndex,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={index !== currentTabIndex}
      style={{ minHeight: 150 }}
    >
      {bids.length ? (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Користувач</TableCell>
              <TableCell>Ціна</TableCell>
              <TableCell>Дата і час</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bids.map((bid) => (
              <TableRow
                key={bid.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {getUserName(bid.user)}
                </TableCell>
                <TableCell>{bid.amount} грн.</TableCell>
                <TableCell>{toDateTimeString(bid.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography variant="h6" sx={{ paddingTop: 5, textAlign: 'center' }}>
          За даним лотом ще немає жодної ставки. <br />
          Будьте першими!
        </Typography>
      )}
    </div>
  );
};

export default LotBidsPanel;
