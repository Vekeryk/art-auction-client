import React from 'react';
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery } from 'react-query';
import { fetchDialogs } from '../../helpers/requests.ts';
import Loading from '../../components/layout/Loading';
import { useNavigate } from 'react-router-dom';
import useAppSelector from '../../hooks/useAppSelector.ts';
import { getUserName } from '../../utils/users.ts';
import { toDateTimeString } from '../../utils/dates.ts';
import { NAVIGATE_PATH } from '../../helpers/constants.ts';

export const MessagesPage: React.FC = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userReducer.user);
  const { data: messages, isLoading } = useQuery(['userDialogs'], () =>
    fetchDialogs(),
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Stack alignItems="center" minHeight="50vh">
      <Stack gap={2} width="100%" maxWidth={800} justifyItems="center">
        <Typography variant="h4">Мої повідомлення</Typography>
        {!messages?.length && (
          <Typography variant="h4" textAlign="center">
            У вас ще немає лотів.
          </Typography>
        )}
        <List>
          {messages?.map((message) => {
            const person =
              message.sender.id === user!.id
                ? message.receiver
                : message.sender;
            return (
              <Paper key={message.id} sx={{ marginBottom: 1 }}>
                <ListItemButton
                  onClick={() => navigate(NAVIGATE_PATH.dialog(person.id))}
                >
                  <ListItemAvatar>
                    <Avatar src={person.profilePicture} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<span>{getUserName(person)}</span>}
                    secondary={
                      <span>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {message.sender.id === user!.id
                            ? 'Ви'
                            : message.sender.username}
                        </Typography>
                        <span>
                          {': '}
                          {message.message} {' — '}
                          {toDateTimeString(message.createdAt)}
                        </span>
                      </span>
                    }
                  />
                </ListItemButton>
              </Paper>
            );
          })}
        </List>
      </Stack>
    </Stack>
  );
};
