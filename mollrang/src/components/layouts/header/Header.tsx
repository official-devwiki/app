import { ReactElement, useState } from "react";
import useTheme from "@hooks/useTheme";
import { BulbIcon } from "@components/common/icons/BulbIcon";
import Link from "next/link";
import { State, setModalOpen } from "@store/slice/modalSlice";
import { useAppDispatch } from "@hooks/useRedux";
import { Typography } from "@components/common/Typography";
import * as S from "./Header.style";
import { Button } from "@components/common/Button";
import classNames from "classnames";
import { FiAlignJustify } from "react-icons/fi";
import { PiBook } from "react-icons/pi";
import { FiPieChart } from "react-icons/fi";

export const Header = (): ReactElement => {
  const { toggleTheme } = useTheme();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const openModal = (type: string): void => {
    setMenuIsOpen(false);
    const modalState: State = {
      type,
      modalType: "fade",
      isOpen: true,
    };
    dispatch(setModalOpen(modalState));
  };

  return (
    <S.HeaderContainer>
      <S.HeaderBox>
        <Link href={"/"}>
          <Typography
            $fontFamily="BMJua"
            $color={"textPrimary"}
            $weight={"medium"}
            $variant={"h1"}
          >
            몰랑
          </Typography>
        </Link>
        <S.FlexBox>
          <S.BulbButton
            type="button"
            onClick={toggleTheme}
            aria-label="change-background-color-button"
          >
            <BulbIcon />
          </S.BulbButton>

          <S.MenuItemsContainer>
            <S.HamburgerButton
              type="button"
              aria-label="hamburger-button"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <FiAlignJustify size={24} color={"var(--hamburger_icon)"} />
            </S.HamburgerButton>
            <ul
              className={classNames(
                "toggle_menu",
                menuIsOpen ? "show" : "hide",
              )}
            >
              <li>
                <Button variant={"icon"} onClick={() => openModal("guide")}>
                  <PiBook color={"#4e4e4e"} size={20} />
                  <Typography
                    $fontFamily={"Noto Sans KR"}
                    $variant={"caption"}
                    as={"span"}
                    $color={"textBlack200"}
                  >
                    가이드
                  </Typography>
                </Button>
              </li>
              <li>
                <Button
                  variant={"icon"}
                  onClick={() => openModal("statistics")}
                >
                  <FiPieChart color={"#4e4e4e"} size={20} />
                  <Typography
                    $fontFamily={"Noto Sans KR"}
                    $variant={"caption"}
                    as={"span"}
                    $color={"textBlack200"}
                  >
                    통계
                  </Typography>
                </Button>
              </li>
            </ul>
          </S.MenuItemsContainer>
        </S.FlexBox>
      </S.HeaderBox>
    </S.HeaderContainer>
  );
};
