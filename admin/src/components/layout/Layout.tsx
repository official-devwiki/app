import { ReactElement } from 'react';
import { Outlet } from 'react-router';

export const Layout = (): ReactElement => {
  return (
    <>
      <Outlet />
    </>
  );
};
