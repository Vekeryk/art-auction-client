import React, { Fragment, useState } from 'react';

import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import { LotComment } from '../../../types.ts';
import { toDateTimeString } from '../../../utils/dates.ts';
import { getUserName } from '../../../utils/users.ts';
import LotCommentAction from '../LotCommentAction';

interface ILotCommentsPanel {
  lotComments: LotComment[];
  index: number;
  currentTabIndex: number;
}

const LotCommentsPanel: React.FC<ILotCommentsPanel> = ({
  lotComments,
  index,
  currentTabIndex,
}) => {
  const [comments] = useState(lotComments);

  return (
    <div
      role="tabpanel"
      hidden={index !== currentTabIndex}
      style={{ minHeight: 150 }}
    >
      {comments.length ? (
        <List>
          {comments.map((comment) => (
            <Fragment key={comment.id}>
              <ListItem alignItems="flex-start" sx={{ flexWrap: 'wrap' }}>
                <ListItemAvatar>
                  <Avatar src={comment.user.profilePictureUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={getUserName(comment.user)}
                  secondary={
                    <Typography variant="body1">{comment.content}</Typography>
                  }
                />
                <Typography variant="body2">
                  {toDateTimeString(comment.createdAt)}
                </Typography>
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
      ) : (
        <Typography variant="h6" sx={{ paddingTop: 5, textAlign: 'center' }}>
          За даним лотом ще немає жодного коментаря. <br />
          Будьте першими!
        </Typography>
      )}
      <LotCommentAction />
    </div>
  );
};

export default LotCommentsPanel;
