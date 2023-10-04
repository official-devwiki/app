import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {Layout} from '@components/layout/Layout';
import {HomePage} from '@pages/home/HomePage';
import {SignInPage} from '@pages/index/SignInPage';
import {MollrangPage} from '@pages/mollrang/IndexPage';

//TODO: 라우터 가드 (로그인 권한 검사)
export const Router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='sign-in' index element={<SignInPage />} />
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={'mollrang'} element={<Layout />}>
          <Route index element={<MollrangPage />} />
        </Route>
      </Route>,
    ),
  );
