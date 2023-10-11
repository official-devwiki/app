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

  @media screen and (max-width: 767px) {
    //transform: translateY(100%);
  }
`;

export const Footer = (): ReactElement => {
  return (
    <FooterLayout className={"footer"}>
      <Typography color={"textGrayAndWhite"} variant={"body2"}>
        ⓒ 2023. DaHoon06. All rights reserved.
      </Typography>
    </FooterLayout>
  );
};
