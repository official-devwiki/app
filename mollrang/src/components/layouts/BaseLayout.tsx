import {PropsWithChildren, ReactElement} from "react";
import {MetaComponent} from "@components/layouts/header/MetaComponent";
import {Header} from "./header/Header";
import {BottomNavigation} from "@components/navigation/bottom/BottomNavigation";
import {ModalContainer} from "@containers/modal";
import * as S from "./style";
import useTheme from "@hooks/useTheme";


type Props = PropsWithChildren;

export const BaseLayout = (props: Props): ReactElement => {
  const {children} = props;
  const {isDarkMode} = useTheme();

  return (
    <>
      <MetaComponent theme={isDarkMode}/>
      <Header/>
      <S.Layout>
        <S.Main>{children}</S.Main>
      </S.Layout>
      <ModalContainer/>
      <BottomNavigation/>
    </>
  );
};
