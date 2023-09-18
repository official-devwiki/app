import {NextPage} from 'next';
import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import {Button} from '@components/common/Button';
import {OpenBookIcon} from '@components/common/icons/OpenBookIcon';
import * as S from './style';
import {IntroBanner} from '@components/intro/IntroBanner';

const Home: NextPage = (): ReactElement => {
  return (
    <S.HomeLayout>
      <S.HomeBox>
        <IntroBanner />
        <Button type={'button'} variant={'primary-rounded'}>
          <OpenBookIcon />
          <Typography as={'span'} color={'white'}>오늘의 퀴즈</Typography>
        </Button>
      </S.HomeBox>
    </S.HomeLayout>
  );
};

export default Home;
