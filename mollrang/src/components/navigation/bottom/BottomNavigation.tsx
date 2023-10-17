import { ReactElement } from "react";
import { Icons } from "@components/common/icons/Icons";
import { Typography } from "@components/common/Typography";
import { Button } from "@components/common/Button";
import { useAppDispatch } from "@hooks/useRedux";
import { useRouter } from "next/router";
import * as S from "./style";
import { setModalOpen, State } from "@store/slice/modalSlice";

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
            <Icons type={"home"} />
            <Typography $variant={"caption"} as={"span"} $color={"textWhite"}>
              홈
            </Typography>
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Button variant={"icon"} onClick={() => openModal("guide")}>
            <Icons type={"guide"} />
            <Typography $variant={"caption"} as={"span"} $color={"textWhite"}>
              가이드
            </Typography>
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Button variant={"icon"} onClick={() => openModal("statistics")}>
            <Icons type={"chart"} />
            <Typography $variant={"caption"} as={"span"} $color={"textWhite"}>
              통계
            </Typography>
          </Button>
        </S.NavItem>
        <S.NavItem>
          <Icons type={"setting"} />
          <Typography $variant={"caption"} as={"span"} $color={"textWhite"}>
            설정
          </Typography>
        </S.NavItem>
      </S.NavList>
    </S.BottomNavigationLayout>
  );
};
