import React, {PropsWithChildren, ReactElement} from "react";
import {Header} from "./header/Header";
import {BottomNavigation} from "@components/navigation/bottom/BottomNavigation";
import {ModalContainer} from "@containers/modal";
import * as S from "./style";
import MetaHead from "@components/layouts/header/MeatHead";
import MetaCommonHead from "@components/layouts/header/MetaComponent";

type Props = PropsWithChildren;

export const BaseLayout = (props: Props): ReactElement => {
  const {children} = props;

  return (
    <>
      <MetaHead/>
      <MetaCommonHead/>
      <Header/>
      <S.Layout>
        <S.Main>{children}</S.Main>
      </S.Layout>
      <ModalContainer/>
      <BottomNavigation/>
    </>
  );
};
