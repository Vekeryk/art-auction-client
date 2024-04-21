import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { DarkModeOutlined, LightMode } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import useAppSelector from '../../../hooks/useAppSelector.ts';
import useAppDispatch from '../../../hooks/useAppDispatch.ts';
import { toggleTheme } from '../../../store/reducers/uiSlice.ts';

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.uiReducer.theme);

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
          Арт Аукціон
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={RouterLink} to="/">
            Головна
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            Про нас
          </Button>
          <Button color="inherit" component={RouterLink} to="/lot">
            Лоти
          </Button>
        </Box>
        <Breadcrumbs sx={{ marginX: 2, color: 'white' }}>
          <Link
            underline="hover"
            color="inherit"
            component={RouterLink}
            to="/login"
          >
            Вхід
          </Link>
          <Link
            underline="hover"
            color="inherit"
            component={RouterLink}
            to="/register"
          >
            Реєстрація
          </Link>
        </Breadcrumbs>
        <IconButton
          size="large"
          edge="end"
          aria-label="account"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <IconButton size="large" aria-label="17 notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
          {theme === 'dark' ? <LightMode /> : <DarkModeOutlined />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
