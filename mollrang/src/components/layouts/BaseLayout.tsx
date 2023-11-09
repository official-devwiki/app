import { ReactElement, ReactNode } from "react";
import { MetaComponent } from "@components/layouts/header/MetaComponent";
import { Header } from "./header/Header";
import { BottomNavigation } from "@components/navigation/bottom/BottomNavigation";
import { ModalContainer } from "@containers/modal";
import * as S from "./style";

interface Props {
  children: ReactNode;
}

export const BaseLayout = (props: Props): ReactElement => {
  const { children } = props;

  return (
    <>
      <MetaComponent />
      <Header />
      <S.Layout>
        <S.Main>{children}</S.Main>
      </S.Layout>
      <ModalContainer />
      <BottomNavigation />
    </>
  );
};
