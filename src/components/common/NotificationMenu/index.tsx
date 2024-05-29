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
import { useQuery } from 'react-query';

import { fetchNotifications } from '../../../helpers/requests.ts';
import { toDateTimeString } from '../../../utils/dates.ts';

const NotificationsMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { data: notifications, isLoading } = useQuery(
    ['notifications'],
    fetchNotifications,
    { refetchInterval: 60000 }, // update every minute
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMarkAllAsRead = () => {
    // TODO: read notifications
    console.log('Всі повідомлення відзначені як прочитані');
    handleClose();
  };

  if (isLoading || !notifications) {
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
          {notifications?.map((notification) => (
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
            onClick={handleMarkAllAsRead}
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
