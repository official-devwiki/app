import {ReactElement} from 'react';
import styled from 'styled-components';
import {Icons} from '@components/common/icons/Icons';
import {Typography} from '@components/common/Typography';
import {Button} from '@components/common/Button';
import {setBottomModalShow} from '@store/slice/utilSlice';
import {useAppDispatch} from '@hooks/useRedux';
import {useRouter} from 'next/router';

const BottomNavigationLayout = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: var(--primary);
  width: 100%;
  min-width: 300px;
  height: 74px;
  border-radius: 10px 10px 0 0;
  display: none;
  z-index: 10;
  
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    filter: brightness(90%);
    cursor: pointer;
  }
  
  @media screen and (max-width: 767px) {
    
  }
`;

export const BottomNavigation = (): ReactElement => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const guideOpen = (): void => {
    dispatch(setBottomModalShow(true));
  };

  const statisticsOpen = (): void => {
    dispatch(setBottomModalShow(true));
  };

  const goToHome = async (): Promise<void> => {
    await router.push('/');
  };

  return (
    <BottomNavigationLayout>
      <NavList>
        <NavItem>
          <Button variant={'icon'} onClick={goToHome}>
            <Icons type={'home'} />
            <Typography variant={'caption'} as={'span'} color={'textWhite'}>홈</Typography>
          </Button>
        </NavItem>
        <NavItem>
          <Button variant={'icon'} onClick={guideOpen}>
            <Icons type={'guide'} />
            <Typography variant={'caption'} as={'span'} color={'textWhite'}>가이드</Typography>
          </Button>
        </NavItem>
        <NavItem>
          <Button variant={'icon'} onClick={statisticsOpen}>
            <Icons type={'chart'} />
            <Typography variant={'caption'} as={'span'} color={'textWhite'}>통계</Typography>
          </Button>
        </NavItem>
        <NavItem>
          <Icons type={'setting'} />
          <Typography variant={'caption'} as={'span'} color={'textWhite'}>설정</Typography>
        </NavItem>
      </NavList>
    </BottomNavigationLayout>
  );
};
