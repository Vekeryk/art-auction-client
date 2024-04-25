import React from 'react';

import { Box, Tab, Tabs } from '@mui/material';

import LotBidsPanel from '../LotBidsPanel';
import LotCommentsPanel from '../LotCommentsPanel';
import LotDescriptionPanel from '../LotDescriptionPanel';
import { Lot } from '../../../types.ts';

interface ILotTabs {
  lot: Lot;
}

const LotTabs: React.FC<ILotTabs> = ({ lot }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={currentIndex}
          onChange={(_, index) => setCurrentIndex(index)}
        >
          <Tab label="Опис" />
          <Tab label={`Ставки (${[].length})`} />
          <Tab label={`Коментарі (${lot.comments.length})`} />
        </Tabs>
      </Box>
      <LotDescriptionPanel lot={lot} currentTabIndex={currentIndex} index={0} />
      <LotBidsPanel bids={[]} currentTabIndex={currentIndex} index={1} />
      <LotCommentsPanel
        comments={lot.comments}
        currentTabIndex={currentIndex}
        index={2}
      />
    </Box>
  );
};

export default LotTabs;
