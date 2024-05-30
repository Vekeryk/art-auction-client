import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import Loading from '../../components/layout/Loading';
import useAppSelector from '../../hooks/useAppSelector.ts';
import { BaseUser } from '../../types.ts';
import { getUserName } from '../../utils/users.ts';
import { toDateTimeString } from '../../utils/dates.ts';
import { fetchDialogMessages, sendMessage } from '../../helpers/requests.ts';
import { getPicturePath } from '../../utils/lots.ts';

export const DialogPage: React.FC = () => {
  const { personId } = useParams<{ personId: string }>();
  const user = useAppSelector((state) => state.userReducer.user);
  const [newMessage, setNewMessage] = useState('');

  const {
    data: dialog,
    isLoading,
    refetch,
  } = useQuery(
    ['dialogMessages', personId],
    () => fetchDialogMessages(personId),
    { refetchInterval: 60000 }, // update every minute
  );

  const sendMessageMutation = useMutation(() => {
    return sendMessage(newMessage, personId);
  });

  const handleSendMessage = () => {
    sendMessageMutation.mutate(undefined, {
      onSuccess: () => {
        refetch().then(() => setNewMessage(''));
      },
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!dialog || !dialog.messages?.length) {
    return (
      <Stack alignItems="center" minHeight="50vh">
        <Typography variant="h4" textAlign="center">
          Діалог не знайдено.
        </Typography>
      </Stack>
    );
  }

  const participants: Record<string, BaseUser> = {};
  participants[user!.id] = user!;
  participants[dialog.person.id] = dialog.person;
  console.log(dialog.person);
  console.log(user);

  return (
    <Stack alignItems="center" minHeight="50vh">
      <Stack gap={2} width="100%" maxWidth={800} justifyItems="center">
        <Typography variant="h4">
          Діалог з {getUserName(dialog.person)}
        </Typography>
        <List>
          {dialog.messages.map((message) => (
            <Paper key={message.id} sx={{ marginBottom: 1 }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    src={getPicturePath(
                      participants[message.senderId].profilePicture,
                    )}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={message.message}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {message.senderId === user!.id
                          ? 'Ви'
                          : getUserName(participants[message.senderId])}
                      </Typography>
                      <span> — {toDateTimeString(message.createdAt)}</span>
                    </>
                  }
                />
              </ListItem>
            </Paper>
          ))}
        </List>
        <Stack direction="row" gap={2}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Ваше повідомлення..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button
            endIcon={<SendIcon />}
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            sx={{ height: 56, paddingX: 4 }}
          >
            Надіслати
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
