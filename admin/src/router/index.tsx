import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { MainPage } from '../pages/MainPage';

export const Router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Route>,
    ),
  );
