import { ReactElement } from "react";
import { Typography } from "@components/common/Typography";
import { Button } from "@components/common/Button";
import { useAppDispatch } from "@hooks/useRedux";
import { useRouter } from "next/router";
import * as S from "./style";
import { setModalOpen, State } from "@store/slice/modalSlice";
import { TiHome, TiChartPie } from "react-icons/ti";
import { IoSettingsSharp, IoBook } from "react-icons/io5";

export const BottomNavigation = (): ReactElement => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const goToHome = async (): Promise<void> => {
    await router.push("/");
  };

  const openModal = (type: string): void => {
    const modalState: State = {
      type,
      modalType: "bottom-slide",
      isOpen: true,
    };
    dispatch(setModalOpen(modalState));
  };

  return (
    <S.BottomNavigationLayout>
      <S.NavList>
        <S.NavItem>
          <Button variant={"icon"} onClick={goToHome}>
            <TiHome color={"#fff"} size={26} />
            <Typography
              $fontFamily={"Noto Sans KR"}
              $variant={"caption"}
              as={"span"}
              $color={"textWhite"}
            >
              홈
            </Typography>
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Button variant={"icon"} onClick={() => openModal("guide")}>
            <IoBook color={"#fff"} size={26} />
            <Typography
              $fontFamily={"Noto Sans KR"}
              $variant={"caption"}
              as={"span"}
              $color={"textWhite"}
            >
              가이드
            </Typography>
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Button variant={"icon"} onClick={() => openModal("statistics")}>
            <TiChartPie color={"#fff"} size={30} />
            <Typography
              $fontFamily={"Noto Sans KR"}
              $variant={"caption"}
              as={"span"}
              $color={"textWhite"}
            >
              통계
            </Typography>
          </Button>
        </S.NavItem>
        {/*<S.NavItem>*/}
        {/*  <IoSettingsSharp color={'#fff'} size={26} />*/}
        {/*  <Typography $variant={"caption"} as={"span"} $color={"textWhite"}>*/}
        {/*    설정*/}
        {/*  </Typography>*/}
        {/*</S.NavItem>*/}
      </S.NavList>
    </S.BottomNavigationLayout>
  );
};
