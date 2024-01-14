import {ReactElement} from "react";
import * as S from "./style";
import {NoteIcon} from "@components/common/icons/NoteIcon";
import {Typography} from "@components/common/Typography";
import styled from "styled-components";
import {Button} from "@components/common/Button";
import {SITE_URL} from "@config/index";
import {IoMdShare} from "react-icons/io";
import {BsQuestionLg} from "react-icons/bs";
import Image from "next/image";
import toast, {Toaster} from 'react-hot-toast';

export const FlexBox = styled.div`
  button {
    width: 100% !important;
    display: flex;
    justify-content: space-between;
    margin-top: 4em;
    align-items: center;
    border: 1px solid transparent;
  }
`;

export const MollrangSharedButton = (): ReactElement => {
  const sharedMollrangLink = async (): Promise<void> => {
    await navigator.clipboard.writeText(SITE_URL);

    toast.success(`클립보드에 저장되었습니다.`, {
      duration: 1500,
      style: {
        backgroundColor: '#e0ffde'
      },
      position: 'top-right',
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  };

  return (
    <FlexBox>
      <Button variant={"icon"} onClick={sharedMollrangLink}>
        <IoMdShare color={"var(--intro_icon)"} size={22}/>
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
      <Image
        width={220}
        height={190}
        priority
        alt="mollrang_banner.svg"
        src={"https://d30ugctgtj8te2.cloudfront.net/assets/banner.svg"}
      />
      <S.IntroTextBox>
        <div>
          <S.IntroTextIconWrapper1>
            <NoteIcon/>
            <Typography
              $color={"textDefault"}
              $weight={"bold"}
              $variant={"body2"}
            >
              너 그거 알아?
            </Typography>
          </S.IntroTextIconWrapper1>
          <S.IntroTextIconWrapper2>
            <Typography
              $color={"textPrimary"}
              $weight={"bold"}
              $variant={"body1"}
            >
              몰랑
            </Typography>
            <S.IntroTextIcon2>
              <BsQuestionLg size={28} color={"var(--intro_icon)"}/>
            </S.IntroTextIcon2>
          </S.IntroTextIconWrapper2>
          <MollrangSharedButton/>
        </div>
      </S.IntroTextBox>
    </S.IntroContainer>
  );
};
