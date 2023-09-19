import {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {MetaComponent} from '@components/layout/header/MetaComponent';
import {Header} from './header/Header';
import {BottomNavigation} from '@components/layout/navigation/BottomNavigation';

interface Props {
  children: ReactNode;
}

export const LayoutComponent = (props: Props): ReactElement => {
  const {children} = props;

  return (
    <>
      <MetaComponent />
      <Header />
      <Main>{children}</Main>
      <BottomNavigation />
    </>
  );
};

const Main = styled.main`
  margin-top: 66px;
`;
