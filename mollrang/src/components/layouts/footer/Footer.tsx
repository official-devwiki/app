import { Typography } from "@components/common/Typography";
import { ReactElement } from "react";
import styled from "styled-components";

const FooterLayout = styled.footer`
  width: 100%;
  height: 88px;
  background-color: var(--bg_footer);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  //transform: translateY(100%);

  ${({ theme }) => theme.media.tablet} {
    //transform: translateY(100%);
  }
`;

export const Footer = (): ReactElement => {
  return (
    <FooterLayout className={"footer"}>
      <Typography
        $fontFamily={"Noto Sans KR"}
        $color={"textGrayAndWhite"}
        $variant={"caption"}
      >
        ⓒ 2024. mollrang. All rights reserved.
      </Typography>
    </FooterLayout>
  );
};
