import React, { useState } from 'react';
import {
  Badge,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  Stack,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useMutation, useQuery } from 'react-query';

import {
  fetchNotifications,
  readNotifications,
} from '../../../helpers/requests.ts';
import { toDateTimeString } from '../../../utils/dates.ts';

const NotificationsMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { data: notifications, refetch } = useQuery(
    ['notifications'],
    fetchNotifications,
    { refetchInterval: 3000 }, // update every 3 seconds
  );

  const readNotificationsMutation = useMutation(() => {
    return readNotifications();
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReadNotifications = () => {
    readNotificationsMutation.mutate(undefined, {
      onSuccess: () => {
        handleClose();
        refetch();
      },
    });
  };

  if (!notifications?.length) {
    return null;
  }

  return (
    <div>
      <IconButton
        size="large"
        aria-label={notifications && `${notifications.length} notifications`}
        color="inherit"
        onClick={handleClick}
      >
        <Badge
          badgeContent={notifications && notifications.length}
          color="error"
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: 450,
            },
          },
        }}
      >
        <List sx={{ maxHeight: 200, overflowY: 'auto' }}>
          {notifications.map((notification) => (
            <ListItem key={notification.id} divider>
              <ListItemText
                primary={notification.message}
                primaryTypographyProps={{ fontSize: 14 }}
                secondary={toDateTimeString(notification.createdAt)}
              />
            </ListItem>
          ))}
        </List>
        <Stack justifyContent="center" alignItems="center">
          <Button
            onClick={handleReadNotifications}
            variant="contained"
            color="primary"
          >
            Прочитано
          </Button>
        </Stack>
      </Menu>
    </div>
  );
};

export default NotificationsMenu;
