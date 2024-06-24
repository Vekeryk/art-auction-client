import React, { useState } from 'react';

import { IconButton, List, ListItem, ListItemText, Menu } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { CurrentUser } from '../../../types.ts';
import keycloak from '../../../utils/keycloak.ts';

interface IUserProfileMenu {
  user: CurrentUser;
}

const UserProfileMenu: React.FC<IUserProfileMenu> = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="end"
        aria-label="account"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: 300,
            },
          },
        }}
      >
        <List>
          {user.firstName && user.lastName && (
            <ListItem divider>
              <ListItemText
                primary={user.firstName + ' ' + user.lastName}
                primaryTypographyProps={{ fontSize: 16 }}
              />
            </ListItem>
          )}
          <ListItem divider>
            <ListItemText
              primary={user.username}
              primaryTypographyProps={{ fontSize: 16 }}
            />
          </ListItem>
          <ListItem sx={{ cursor: 'pointer' }} divider>
            <ListItemText
              onClick={() => keycloak.logout()}
              primary="Вийти"
              primaryTypographyProps={{ fontSize: 16 }}
            />
          </ListItem>
        </List>
      </Menu>
    </div>
  );
};

export default UserProfileMenu;
