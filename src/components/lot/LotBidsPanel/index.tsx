import React, { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useQuery } from 'react-query';

import { toDateTimeString } from '../../../utils/dates.ts';
import { getUserName } from '../../../utils/users.ts';
import { fetchBids, fetchUsers } from '../../../helpers/requests.ts';
import { BaseUser, EnrichedBid } from '../../../types.ts';
import { useSocketContext } from '../../../hooks/useSocketContext.ts';

interface ILotBidsPanel {
  lotId: string;
  index: number;
  currentTabIndex: number;
}

const LotBidsPanel: React.FC<ILotBidsPanel> = ({
  lotId,
  index,
  currentTabIndex,
}) => {
  const { socket } = useSocketContext();

  const [bids, setBids] = useState<EnrichedBid[]>();
  const { data: initialBids, refetch } = useQuery(['bids', lotId], () =>
    fetchBids(lotId),
  );

  useEffect(() => {
    if (!socket) return;

    socket.on('bidUpdate', () => refetch());

    return () => {
      socket.off('bidUpdate');
    };
  }, [socket, refetch]);

  const userIds = initialBids
    ? [...new Set(initialBids?.map((bid) => bid.userId))]
    : [];

  const { data: bidders } = useQuery(
    ['bidders', userIds],
    () => fetchUsers(userIds),
    { enabled: !!userIds.length },
  );

  if (!bids && initialBids && bidders) {
    const biddersDict = (bidders ?? []).reduce<Record<string, BaseUser>>(
      (acc, bidder) => {
        acc[bidder.id] = bidder;
        return acc;
      },
      {},
    );
    setBids(
      initialBids.map((bid) => ({
        ...bid,
        user: biddersDict[bid.userId],
      })),
    );
  }

  return (
    <div
      role="tabpanel"
      hidden={index !== currentTabIndex}
      style={{ minHeight: 150 }}
    >
      {bids?.length ? (
        <TableContainer sx={{ maxHeight: 350 }}>
          <Table aria-label="simple table" stickyHeader>
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
        </TableContainer>
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
