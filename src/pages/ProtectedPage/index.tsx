import React from 'react';

import { Outlet } from 'react-router-dom';

import keycloak from '../../utils/keycloak.ts';
import useAppSelector from '../../hooks/useAppSelector.ts';
import Loading from '../../components/layout/Loading';

export const ProtectedPage: React.FC = () => {
  const { loading } = useAppSelector((state) => state.userReducer);

  if (loading) {
    return <Loading />;
  }

  if (!keycloak.authenticated) {
    keycloak.login();
    return null;
  }

  return <Outlet />;
};
