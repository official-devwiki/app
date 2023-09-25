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
  width: 100%;
  svg {
    margin-right: 0.5em;
  }
  hr {
    background: var(--bg_line);
    height: 2px;
    border: 0;
    margin: 0;
    z-index: 0;
    position: relative;
    top: 24px;
  }
  button {
    position: relative;
    z-index: 2;
    margin: auto;
  }
`;

const SubItemsLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  
  @media screen and (max-width: 767px) {
    flex-direction: column;
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
          <hr />
          <Button type={'button'} variant={'primary-rounded'} onClick={playQuizButton}>
            <OpenBookIcon />
            <Typography as={'span'} color={'white'}>오늘의 퀴즈</Typography>
          </Button>
        </PlayQuizBox>
        <IntroShorts />
        <SubItemsLayout>
          <AttendanceCheck />
          <CorrectAnswer />
        </SubItemsLayout>

      </S.HomeBox>
      <Footer />
    </S.HomeLayout>
  );
};



export default Home;
