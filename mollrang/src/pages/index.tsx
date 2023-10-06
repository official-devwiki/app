import {NextPage} from 'next';
import {ReactElement} from 'react';
import {Typography} from '@components/common/Typography';
import {Button} from '@components/common/Button';
import {OpenBookIcon} from '@components/common/icons/OpenBookIcon';
import * as S from './style';
import {IntroBanner, IntroShorts} from '@components/intro';
import {AttendanceCheck} from '@components/attendance/AttendanceCheck';
import {CorrectAnswers} from '@components/statistics/CorrectAnswers';
import {useRouter} from 'next/router';
import {Footer} from '@components/layout/footer/Footer';
import styled from 'styled-components';
import {ConsecutiveAnswers} from "@components/statistics/ConsecutiveAnswers";

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
  
  .answers-container {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 3em;
    padding: 18px 0;

  }
  
  @media screen and (max-width: 767px) {
    flex-direction: column;

    .answers-container {
      border-top: 1px solid var(--correct_border);
      border-bottom: 1px solid var(--correct_border);
      margin-top: 1em;
    }
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
            <Typography as={'span'} color={'textWhite'}>오늘의 퀴즈</Typography>
          </Button>
        </PlayQuizBox>
        <IntroShorts />
        <SubItemsLayout>
          <AttendanceCheck />
          <div className={'answers-container'}>
            <CorrectAnswers />
            <ConsecutiveAnswers />
          </div>
        </SubItemsLayout>

      </S.HomeBox>
      <Footer />
    </S.HomeLayout>
  );
};



export default Home;
