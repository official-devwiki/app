import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.picture`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = () => {
  const url = '/logo.svg';
  return (
    <LogoWrapper>
      <img src={url} width={144} alt={'devwiki-logo'} />
    </LogoWrapper>
  )
}