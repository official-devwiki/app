import { ReactElement } from "react";
import * as S from "./style";
import { NoteIcon } from "@components/common/icons/NoteIcon";
import { Typography } from "@components/common/Typography";
import BannerSvg from "@images/banner.svg";
import styled from "styled-components";
import { Button } from "@components/common/Button";
import toast from "@components/common/toast/ToastHandler";
import { IS_PRODUCTION } from "@config/index";
import { IoMdShare } from "react-icons/io";
import { BsQuestionLg } from "react-icons/bs";

export const FlexBox = styled.div`
  button {
    width: 100%!important;
    display: flex;
    justify-content: space-between;
    margin-top: 4em;
    align-items: center;
    border: 1px solid transparent;

  }
`;

const Banner = styled(BannerSvg)`
  width: 220px;
  height: 190px;
`;

export const MollrangSharedButton = (): ReactElement => {
  const sharedMollrangLink = async (): Promise<void> => {
    const url = IS_PRODUCTION
      ? "https://mollrang.netlify.app/"
      : "http://localhost:3000/";
    await navigator.clipboard.writeText(url);
    toast.message(`클립보드에 저장되었습니다.`);
  };

  return (
    <FlexBox>
      <Button variant={"icon"} onClick={sharedMollrangLink}>
        <IoMdShare color={'var(--intro_icon)'} size={22} />
        <Typography $color={"textDefault"} $weight={"bold"} $variant={"body2"}>
          몰랑 공유하기
        </Typography>
      </Button>
    </FlexBox>
  );
};

export const IntroBanner = (): ReactElement => {
  return (
    <S.IntroContainer>
      <div>
        <Banner />
      </div>
      <S.IntroTextBox>
        <div>
          <S.IntroTextIconWrapper1>
            <NoteIcon />
            <Typography
              $color={"textDefault"}
              $weight={"bold"}
              $variant={"body2"}
            >
              너 그거 알아?
            </Typography>
          </S.IntroTextIconWrapper1>
          <S.IntroTextIconWrapper2>
            <Typography $color={"textPrimary"} $weight={"bold"}>
              몰랑
            </Typography>
            <S.IntroTextIcon2>
              <BsQuestionLg size={24} color={'var(--intro_icon)'} />
            </S.IntroTextIcon2>
          </S.IntroTextIconWrapper2>
          <MollrangSharedButton />
        </div>
      </S.IntroTextBox>
    </S.IntroContainer>
  );
};
