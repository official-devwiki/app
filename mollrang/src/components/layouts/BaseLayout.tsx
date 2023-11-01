import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { MetaComponent } from "@components/layouts/header/MetaComponent";
import { Header } from "./header/Header";
import { BottomNavigation } from "@components/navigation/bottom/BottomNavigation";
import { useAppSelector } from "@hooks/useRedux";
import { ModalHandler } from "@components/common/modal/ModalHandler";
import { IntegratedStatistics } from "@containers/statistics/IntegratedStatistics";
import { QuizGuide } from "@components/quizzes/guide/QuizGuide";

interface Props {
  children: ReactNode;
}

const Layout = styled.div`
  padding-bottom: 0;

  ${({ theme }) => theme.media.tablet} {
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
  /* min-height: 1000px; */
`;

import { EmblaOptionsType } from "embla-carousel-react";

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const OPTIONS: EmblaOptionsType = { loop: true };

const SendBox = styled.div`
  position: relative;
  background-color: gray;
`;

export const BaseLayout = (props: Props): ReactElement => {
  const { children } = props;
  const type = useAppSelector((state) => state.modalStore.modal.type);

  return (
    <>
      <MetaComponent />
      <Header />
      <Layout>
        <Main>{children}</Main>
      </Layout>
      <ModalHandler>
        {type === "statistics" && <IntegratedStatistics />}
        {type === "guide" && (
          <div>
            <SendBox>
              <QuizGuide slides={SLIDES} options={OPTIONS} />
            </SendBox>
          </div>
        )}
      </ModalHandler>
      <BottomNavigation />
    </>
  );
};
