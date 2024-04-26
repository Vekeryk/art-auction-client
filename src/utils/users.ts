import { BaseUser } from '../types.ts';
import keycloak from './keycloak.ts';

export const authenticatedAction = (callback: () => void) => {
  if (keycloak.authenticated) {
    callback();
  } else {
    keycloak.login();
  }
};

export const getUserName = (user: BaseUser) => {
  const { username, firstName, lastName, rating } = user;
  if (!firstName && !lastName) {
    return `${username} (${rating})`;
  }
  if (!firstName || !lastName) {
    return `${username} / ${firstName || lastName} (${rating})`;
  }
  return `${username} / ${firstName} ${lastName} (${rating})`;
};
