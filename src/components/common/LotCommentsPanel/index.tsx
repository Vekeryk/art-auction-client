import React, { Fragment } from 'react';

import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

import { LotComment } from './../../../types';
import { toDateTimeString } from '../../../utils/dates.ts';
import { authenticatedAction, getUserName } from '../../../utils/users.ts';

interface ILotCommentsPanel {
  comments: LotComment[];
  index: number;
  currentTabIndex: number;
}

const LotCommentsPanel: React.FC<ILotCommentsPanel> = ({
  comments,
  index,
  currentTabIndex,
}) => {
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
      <Stack alignItems="center" marginY={2}>
        <Button
          variant="contained"
          onClick={() => authenticatedAction(() => {})}
        >
          Додати коментар
        </Button>
      </Stack>
    </div>
  );
};

export default LotCommentsPanel;
