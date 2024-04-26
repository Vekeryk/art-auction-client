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
  SearchPage,
  CreateLotPage,
  AboutPage,
  ProtectedPage,
} from './index.ts';
import { NAVIGATE_PATH as PATH } from '../helpers/constants.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={PATH.home} element={<HomePage />} />
      <Route path={PATH.lot(':lotId')} element={<LotPage />} />
      <Route path={PATH.search} element={<SearchPage />} />
      <Route path={PATH.about} element={<AboutPage />} />
      <Route element={<ProtectedPage />}>
        <Route path={PATH.createLot} element={<CreateLotPage />} />
      </Route>
      <Route path={PATH.any} element={<Navigate to={PATH.home} />} />
    </Route>,
  ),
);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
