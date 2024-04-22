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
  const { username, firstName, lastName } = user;
  if (!firstName && !lastName) {
    return `${username} (${getRandomInt(100)})`;
  }
  if (!firstName || !lastName) {
    return `${username} / ${firstName || lastName} (${getRandomInt(100)})`;
  }
  return `${username} / ${firstName} ${lastName} (${getRandomInt(100)})`;
};

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};
