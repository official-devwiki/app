import {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {MetaComponent} from '@components/layout/header/MetaComponent';
import {Header} from './header/Header';
import {BottomNavigation} from '@components/navigation/bottom/BottomNavigation';
import {useAppSelector} from '@hooks/useRedux';
import {ModalHandler} from "@components/common/modal/ModalHandler";
import {IntegratedStatistics} from "@components/statistics/IntegratedStatistics";
import {MessageBox} from "@components/quizzes/MessageBox";
import {QuizGuide} from "@components/quizzes/guide/QuizGuide";
import Image from "next/image";
import {Typography} from "@components/common/Typography";

interface Props {
  children: ReactNode;
}

const Layout = styled.div`
  padding-bottom: 0;
  
  @media screen and (max-width: 767px) {
    padding-bottom: 74px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 1000px;
  }
`;

const Main = styled.main`
  margin-top: 66px;
  height: 100%;
  display: flex;
  min-height: 1000px;
`;

import { EmblaOptionsType } from 'embla-carousel-react'
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const OPTIONS: EmblaOptionsType = { loop: true }

const SendBox = styled.div`
    position: relative;
    background-color: gray;
`;

export const LayoutComponent = (props: Props): ReactElement => {
  const {children} = props;
  const type = useAppSelector(
    (state) => state.modalStore.modal.type,
  );

  return (
    <>
      <MetaComponent />
      <Header />
      <Layout>
        <Main>{children}</Main>
      </Layout>
      <ModalHandler>
        {type === 'statistics' && (<IntegratedStatistics />)}
        {type === 'guide' && (
          <div>
            <SendBox>
              <QuizGuide slides={SLIDES} options={OPTIONS} />
            </SendBox>

           {/* <QuizGuide slides={[*/}
           {/*   <Typography $color={'textWhite'}>Text1</Typography>,*/}
           {/*   <Typography $color={'textWhite'}>Text2</Typography>,*/}
           {/*   <Typography $color={'textWhite'}>Text3</Typography>,*/}
           {/* ]}*/}
           {/*options={{*/}
           {/*  align: "start",*/}
           {/*  loop: true,*/}
           {/*  skipSnaps: false,*/}
           {/*  inViewThreshold: 0.7,*/}
           {/*}} />*/}
          </div>
        )}
        {type === 'quiz-message' && (<MessageBox />)}
      </ModalHandler>
      <BottomNavigation />
    </>
  );
};


