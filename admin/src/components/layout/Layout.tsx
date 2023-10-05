import {ReactElement} from 'react';
import {Outlet} from 'react-router';
import {SideMenu} from './SideMenu';
import styled from 'styled-components';
import {Header} from "./Header";

const headerHeight = 50;

const MainLayout = styled.main`
  margin-left: 256px;
  height: calc(100% - ${headerHeight}px);
  
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

const MainBox = styled.div`
  background-color: white;
  border-radius: 0 40px 0 0;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
`;
export const Layout = (): ReactElement => {
  return (
    <>
      <SideMenu />
      <Header height={headerHeight} />
      <MainLayout>
        <MainBox>
          <Outlet />
        </MainBox>
      </MainLayout>
    </>
  );
};
