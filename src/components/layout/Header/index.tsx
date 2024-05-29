import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { DarkModeOutlined, LightMode } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import NotificationsMenu from '../../common/NotificationMenu';
import useAppSelector from '../../../hooks/useAppSelector.ts';
import useAppDispatch from '../../../hooks/useAppDispatch.ts';
import { toggleTheme } from '../../../store/reducers/uiSlice.ts';
import keycloak from '../../../utils/keycloak.ts';
import { NAVIGATE_PATH as PATH } from '../../../helpers/constants.ts';

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.uiReducer.theme);
  const user = useAppSelector((state) => state.userReducer.user);

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
          <Button color="inherit" component={RouterLink} to={PATH.home}>
            Головна
          </Button>
          <Button color="inherit" component={RouterLink} to={PATH.about}>
            Про нас
          </Button>
          <Button color="inherit" component={RouterLink} to={PATH.lots}>
            Лоти
          </Button>
        </Box>
        {user ? (
          <Stack direction="row">
            <IconButton
              size="large"
              edge="end"
              aria-label="account"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <NotificationsMenu />
          </Stack>
        ) : (
          <Breadcrumbs sx={{ marginX: 2, color: 'white', cursor: 'pointer' }}>
            <Link
              underline="hover"
              color="inherit"
              onClick={() => keycloak.login()}
            >
              Вхід
            </Link>
            <Link
              underline="hover"
              color="inherit"
              onClick={() => keycloak.register()}
            >
              Реєстрація
            </Link>
          </Breadcrumbs>
        )}

        <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
          {theme === 'dark' ? <LightMode /> : <DarkModeOutlined />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
