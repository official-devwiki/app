import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {Layout} from '../components/layout/Layout';
import {MainPage} from '../pages/MainPage';
import {SignInPage} from '../pages/SignInPage';

//TODO: 라우터 가드 (로그인 권한 검사)
export const Router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="sign-in" index element={<SignInPage />} />
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Route>,
    ),
  );
