import {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {MetaComponent} from '@components/layout/header/MetaComponent';
import {Header} from './header/Header';
import {BottomNavigation} from '@components/layout/navigation/BottomNavigation';
import {BottomSlideModal} from '@components/common/modal/BottomSlide';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {setBottomModalShow} from '@store/slice/utilSlice';

interface Props {
  children: ReactNode;
}

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
      <Main>{children}</Main>
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
