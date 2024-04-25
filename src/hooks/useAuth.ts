import { useEffect, useRef } from 'react';

import keycloak from '../utils/keycloak.ts';
import useAppDispatch from './useAppDispatch.ts';
import { setUser } from '../store/reducers/userSlice.ts';
import { CurrentUser } from '../types.ts';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    keycloak.init({ onLoad: 'check-sso' }).then((isSuccess) => {
      if (isSuccess) {
        keycloak
          .loadUserProfile()
          .then((profile) => dispatch(setUser(profile as CurrentUser)));
        if (keycloak.token) {
          localStorage.setItem('token', keycloak.token);
        }
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
};
export default useAuth;
