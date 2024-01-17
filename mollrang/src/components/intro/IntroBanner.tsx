import { ReactElement } from "react";
import * as S from "./style";
import { NoteIcon } from "@components/common/icons/NoteIcon";
import { Typography } from "@components/common/Typography";
import styled from "styled-components";
import { Button } from "@components/common/Button";
import { SITE_URL } from "@config/index";
import { IoMdShare } from "react-icons/io";
import { BsQuestionLg } from "react-icons/bs";
import toast from "react-hot-toast";

export const SharedFlexBox = styled.div`
  button {
    width: 100% !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid transparent;
    position: relative;
    bottom: 10px;

    .shard_icon {
      background: var(--textYellow);
      border: 1px solid transparent;
      margin-right: 0.5em;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.4);
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  .intro_description {
    width: 45%;
    max-width: 200px;
  }
`;

export const MollrangSharedButton = (): ReactElement => {
  const sharedMollrangLink = async (): Promise<void> => {
    await navigator.clipboard.writeText(SITE_URL);

    toast.success(`클립보드에 저장되었습니다.`, {
      duration: 1500,
      style: {
        backgroundColor: "#e0ffde",
      },
      position: "top-right",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };

  return (
    <SharedFlexBox>
      <Button variant={"icon"} onClick={sharedMollrangLink}>
        <span className={"shard_icon"}>
          <IoMdShare color={"#fff"} size={22} />
        </span>

        <Typography $color={"textDefault"} $variant={"body2"}>
          몰랑 공유하기
        </Typography>
      </Button>
    </SharedFlexBox>
  );
};

export const IntroBanner = (): ReactElement => {
  return (
    <S.IntroContainer>
      <S.IntroTextBox>
        <FlexBox>
          <div className={"intro_description"}>
            <S.IntroTextIconWrapper1>
              <NoteIcon />
              <Typography as={"span"} $color={"textDefault"} $variant={"body2"}>
                너 그거 알아?
              </Typography>
            </S.IntroTextIconWrapper1>
            <S.IntroTextIconWrapper2>
              <Typography as={"span"} $color={"textPrimary"} $variant={"body1"}>
                몰랑
              </Typography>
              <S.IntroTextIcon2>
                <BsQuestionLg size={28} color={"var(--intro_icon)"} />
              </S.IntroTextIcon2>
            </S.IntroTextIconWrapper2>
          </div>

          <MollrangSharedButton />
        </FlexBox>
      </S.IntroTextBox>
    </S.IntroContainer>
  );
};
