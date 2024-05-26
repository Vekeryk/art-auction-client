import { useEffect, useState } from 'react';
import { Bid, Lot } from '../types.ts';
import { useSocketContext } from './useSocketContext.ts';

const useBidding = (lot: Lot | null) => {
  const { socket } = useSocketContext();
  const [usersCount, setUsersCount] = useState<number>();
  const [currentPrice, setCurrentPrice] = useState(lot?.currentPrice);
  const [userBidAmount, setUserBidAmount] = useState(
    lot?.currentPrice ? lot.currentPrice + 10 : 1,
  );

  useEffect(() => {
    if (!socket) return;

    socket.on('bidUpdate', (newBid: Bid) => {
      console.log('bidUpdate', newBid);
      setCurrentPrice(newBid.amount);
      setUserBidAmount(newBid.amount + 20);
    });

    socket.on('usersCountUpdate', (count: number) => {
      console.log('usersCountUpdate', count);
      setUsersCount(count);
    });

    return () => {
      socket.off('bidUpdate');
      socket.off('usersCountUpdate');
    };
  }, [lot, socket]);

  const handlePlaceBid = () => {
    if (!lot || !socket) {
      console.log('debug', lot, socket);
      return;
    }
    socket.emit('placeBid', {
      lotId: lot.id,
      amount: userBidAmount,
    });
  };

  return {
    userBidAmount,
    setUserBidAmount,
    currentPrice,
    handlePlaceBid,
    usersCount,
  };
};

export default useBidding;
