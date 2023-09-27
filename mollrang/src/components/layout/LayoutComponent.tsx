import {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {MetaComponent} from '@components/layout/header/MetaComponent';
import {Header} from './header/Header';
import {BottomNavigation} from '@components/layout/navigation/BottomNavigation';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {setModalOpen} from '@store/slice/utilSlice';
import {FloatingActionButton} from "@components/quizzes/guide/FloatingActionButton";
import {FadeModal} from "@components/common/modal/fade/FadeModal";

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
  const {modal} = useAppSelector(
    (state) => state.utils,
  );
  const {isOpen, type, modalType} = modal;
  const dispatch = useAppDispatch();

  const modalClose = (payload: boolean) => {
    const action = {
      type,
      modalType: 'fade',
      isOpen: payload,
    }
    dispatch(setModalOpen(action))
  };

  return (
    <>
      <MetaComponent />
      <Header />
      <Layout>
        <Main>{children}</Main>
        <FloatingActionButton />
      </Layout>

      <FadeModal isOpen={isOpen} onRequestClose={modalClose}>
        롸
      </FadeModal>
      {/*<BottomSlideModal isOpen={bottomModalShow} onRequestClose={modalClose}>*/}
      {/*  <IntegratedStatistics />*/}
      {/*</BottomSlideModal>*/}
      <BottomNavigation />
    </>
  );
};


