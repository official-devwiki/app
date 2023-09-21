import {NextPage} from 'next';
import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import {Button} from '@components/common/Button';
import {OpenBookIcon} from '@components/common/icons/OpenBookIcon';
import * as S from './style';
import {IntroBanner, IntroShorts} from '@components/intro';
import {AttendanceCheck} from '@components/attendance/AttendanceCheck';
import {CorrectAnswer} from '@components/ratio/CorrectAnswer';
import {useRouter} from 'next/router';
import {Footer} from '@components/layout/footer/Footer';
import styled from 'styled-components';

const PlayQuizBox = styled.div`
  svg {
    margin-right: 0.5em;
  }
`;

const Home: NextPage = (): ReactElement => {
  const router = useRouter();

  const playQuizButton = async (): Promise<void> => {
    await router.push('/quizzes');
  };
  return (
    <S.HomeLayout>
      <S.HomeBox>
        <IntroBanner />
        <PlayQuizBox>
          <Button type={'button'} variant={'primary-rounded'} onClick={playQuizButton}>
            <OpenBookIcon />
            <Typography as={'span'} color={'white'}>오늘의 퀴즈</Typography>
          </Button>
        </PlayQuizBox>
        <IntroShorts />
        <CorrectAnswer />
        <AttendanceCheck />
      </S.HomeBox>
      <Footer />
    </S.HomeLayout>
  );
};

export default Home;
