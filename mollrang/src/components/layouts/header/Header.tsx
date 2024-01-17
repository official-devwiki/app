import { ReactElement } from "react";
import { styled } from "styled-components";
import useTheme from "@hooks/useTheme";
import { BulbIcon } from "@components/common/icons/BulbIcon";
import Link from "next/link";
import { State, setModalOpen } from "@store/slice/modalSlice";
import { useAppDispatch } from "@hooks/useRedux";
import { FiAlignJustify } from "react-icons/fi";
import { Typography } from "@components/common/Typography";

export const Header = (): ReactElement => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const openModal = (): void => {
    const modalState: State = {
      type: "side-menu",
      modalType: "side-menu",
      isOpen: true,
    };
    dispatch(setModalOpen(modalState));
  };

  return (
    <HeaderContainer>
      <HeaderBox>
        <Link href={"/"}>
          <Typography
            $fontFamily="BMJua"
            $color={"textWhite"}
            $weight={"medium"}
            $variant={"h1"}
          >
            몰랑
          </Typography>
        </Link>
        <FlexBox>
          <BulbButton
            type="button"
            onClick={toggleTheme}
            aria-label="change-background-color-button"
          >
            <BulbIcon />
          </BulbButton>
          <HamburgerButton
            type="button"
            onClick={openModal}
            aria-label="hamburger-button"
          >
            <FiAlignJustify size={24} color={"var(--hamburger_icon)"} />
          </HamburgerButton>
        </FlexBox>
      </HeaderBox>
    </HeaderContainer>
  );
};
const BulbButton = styled.button``;
const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

const FlexBox = styled.div`
  display: flex;
`;

const HeaderContainer = styled.header`
  width: 100%;
  min-width: 300px;
  height: 76px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: var(--bg);
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25em;
  height: 100%;
`;
