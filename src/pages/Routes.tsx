import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from '../components/layout/Layout';
import {
  HomePage,
  LotPage,
  CreateLotPage,
  AboutPage,
  ProtectedPage,
  LotsSearchPage,
  UserLotsPage,
  MessagesPage,
  DialogPage,
} from './index.ts';
import { NAVIGATE_PATH as PATH } from '../helpers/constants.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={PATH.home} element={<HomePage />} />
      <Route path={PATH.lot(':lotId')} element={<LotPage />} />
      <Route path={PATH.about} element={<AboutPage />} />
      <Route path={PATH.lots} element={<LotsSearchPage />} />
      <Route element={<ProtectedPage />}>
        <Route path={PATH.createLot} element={<CreateLotPage />} />
        <Route path={PATH.myLots} element={<UserLotsPage />} />
        <Route path={PATH.messages} element={<MessagesPage />} />
        <Route path={PATH.dialog(':personId')} element={<DialogPage />} />
      </Route>
      <Route path={PATH.any} element={<Navigate to={PATH.home} />} />
    </Route>,
  ),
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
