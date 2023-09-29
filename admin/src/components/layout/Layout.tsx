import {ReactElement} from 'react';
import {Outlet} from 'react-router';
import {SideMenu} from './SideMenu';

export const Layout = (): ReactElement => {
  return (
    <>
      <SideMenu />
      <Outlet />
    </>
  );
};
