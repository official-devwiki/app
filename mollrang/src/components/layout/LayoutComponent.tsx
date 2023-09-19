import {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {MetaComponent} from '@components/layout/header/MetaComponent';
import {Header} from './header/Header';
import {BottomNavigation} from '@components/layout/navigation/BottomNavigation';
import {BottomSlideModal} from '@components/common/modal/BottomSlide';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {setBottomModalShow} from '@store/slice/utilSlice';
import {Footer} from '@components/layout/footer/Footer';

interface Props {
  children: ReactNode;
}

const Layout = styled.div`
  padding-bottom: 74px;
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
        <Footer />
      </Layout>
      <BottomSlideModal isOpen={bottomModalShow} onRequestClose={modalClose}>
        <p>SHOW</p>
      </BottomSlideModal>
      <BottomNavigation />
    </>
  );
};

const Main = styled.main`
  margin-top: 66px;
`;
