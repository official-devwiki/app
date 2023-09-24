import {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {MetaComponent} from '@components/layout/header/MetaComponent';
import {Header} from './header/Header';
import {BottomNavigation} from '@components/layout/navigation/BottomNavigation';
import {BottomSlideModal} from '@components/common/modal/BottomSlide';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {setBottomModalShow} from '@store/slice/utilSlice';
import {IntegratedStatistics} from '@components/ratio/IntegratedStatistics';

interface Props {
  children: ReactNode;
}

const Layout = styled.div`
  padding-bottom: 74px;
`;

const Main = styled.main`
  margin-top: 66px;
`;

export const LayoutComponent = (props: Props): ReactElement => {
  const {children} = props;
  const {sideBarIsOpen, isLoading, bottomModalShow} = useAppSelector(
    (state) => state.utils,
  );
  const dispatch = useAppDispatch();

  const modalClose = (payload: boolean) => {
    dispatch(setBottomModalShow(payload));
  };

  return (
    <>
      <MetaComponent />
      <Header />
      <Layout>
        <Main>{children}</Main>
      </Layout>
      <BottomSlideModal isOpen={bottomModalShow} onRequestClose={modalClose}>
        <IntegratedStatistics />
      </BottomSlideModal>
      <BottomNavigation />
    </>
  );
};


