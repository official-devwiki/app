import {ReactElement} from 'react';
import styled from 'styled-components';
import {Icons} from '@components/common/icons/Icons';
import {Typography} from '@components/common/Typography';
import {Button} from '@components/common/Button';
import {setBottomModalShow} from '@store/slice/utilSlice';
import {useAppDispatch} from '@hooks/useRedux';

const BottomNavigationLayout = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--primary);
  width: 100%;
  min-width: 300px;
  height: 74px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
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
`;

export const BottomNavigation = (): ReactElement => {
  const dispatch = useAppDispatch();

  const onclick = () => {
    dispatch(setBottomModalShow(true));
  };

  return (
    <BottomNavigationLayout>
      <NavList>
        <NavItem>
          <Icons type={'home'} />
          <Typography variant={'caption'} as={'span'} color={'white'}>홈</Typography>
        </NavItem>
        <NavItem>
          <Button variant={'icon'} onClick={onclick}>
            <Icons type={'guide'} />
            <Typography variant={'caption'} as={'span'} color={'white'}>가이드</Typography>
          </Button>
        </NavItem>
        <NavItem>
          <Icons type={'chart'} />
          <Typography variant={'caption'} as={'span'} color={'white'}>통계</Typography>
        </NavItem>
        <NavItem>
          <Icons type={'setting'} />
          <Typography variant={'caption'} as={'span'} color={'white'}>설정</Typography>
        </NavItem>
      </NavList>
    </BottomNavigationLayout>
  );
};
