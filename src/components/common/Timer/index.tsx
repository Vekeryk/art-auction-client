import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { TimeLeft } from '../../../types.ts';
import { calculateTimeLeft } from '../../../utils/dates.ts';

interface ITimer {
  endTime: string;
}

const Timer: React.FC<ITimer> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(endTime),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const format = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <Box>
      {timeLeft.difference > 0 ? (
        <Typography variant="h6">
          {!!timeLeft.days && `${timeLeft.days} днів `}
          {format(timeLeft.hours)}:{format(timeLeft.minutes)}:
          {format(timeLeft.seconds)}
        </Typography>
      ) : (
        <Typography color="red" variant="h6">
          Аукціон завершено!
        </Typography>
      )}
    </Box>
  );
};

export default Timer;
