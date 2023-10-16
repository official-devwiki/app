import {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {MetaComponent} from '@components/layout/header/MetaComponent';
import {Header} from './header/Header';
import {BottomNavigation} from '@components/navigation/bottom/BottomNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {ModalHandler} from "@components/common/modal/ModalHandler";
import {IntegratedStatistics} from "@components/statistics/IntegratedStatistics";

interface Props {
  children: ReactNode;
}

const Layout = styled.div`
  padding-bottom: 0;
  
  @media screen and (max-width: 767px) {
    padding-bottom: 74px;
  }
`;

const Main = styled.main`
  margin-top: 66px;
`;

export const LayoutComponent = (props: Props): ReactElement => {
  const {children} = props;
  const type = useAppSelector(
    (state) => state.modalStore.modal.type,
  );

  return (
    <>
      <MetaComponent />
      <Header />
      <Layout>
        <Main>{children}</Main>
      </Layout>
      <ModalHandler>
        {type === 'statistics' && (<IntegratedStatistics />)}
      </ModalHandler>
      <BottomNavigation />
    </>
  );
};


