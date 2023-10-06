import {ReactElement} from 'react';
import {Icons} from '@components/common/icons/Icons';
import {Typography} from '@components/common/Typography';
import {Button} from '@components/common/Button';
import {useAppDispatch} from '@hooks/useRedux';
import {useRouter} from 'next/router';
import * as S from './style';
import {setModalOpen} from "@store/slice/modalSlice";

export const BottomNavigation = (): ReactElement => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const guideOpen = () => {
    const action = {
      type: 'guide',
      modalType: 'fade',
      isOpen: true
    }
    dispatch(setModalOpen(action));
  }

  const statisticsOpen = () => {
    const action = {
      type: 'statistics',
      modalType: 'bottom-slide',
      isOpen: true
    }
    dispatch(setModalOpen(action));
  }

  const goToHome = async (): Promise<void> => {
    await router.push('/');
  };

  return (
    <S.BottomNavigationLayout>
      <S.NavList>
        <S.NavItem>
          <Button variant={'icon'} onClick={goToHome}>
            <Icons type={'home'} />
            <Typography variant={'caption'} as={'span'} color={'textWhite'}>홈</Typography>
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Button variant={'icon'} onClick={guideOpen}>
            <Icons type={'guide'} />
            <Typography variant={'caption'} as={'span'} color={'textWhite'}>가이드</Typography>
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Button variant={'icon'} onClick={statisticsOpen}>
            <Icons type={'chart'} />
            <Typography variant={'caption'} as={'span'} color={'textWhite'}>통계</Typography>
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Icons type={'setting'} />
          <Typography variant={'caption'} as={'span'} color={'textWhite'}>설정</Typography>
        </S.NavItem>
      </S.NavList>
    </S.BottomNavigationLayout>
  );
};
