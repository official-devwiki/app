import styled from "styled-components";

export const Layout = styled.div`
  padding-bottom: 0;
  height: 100%;
  background-color: ${({theme}) => theme.colors.bg.primary};

  ${({theme}) => theme.media.tablet} {
    padding-bottom: 80px;
    height: auto;
    min-height: 100vh;
  }
`;

export const Main = styled.main`
  margin-top: 66px;
  min-height: 100vh;
  height: auto;
`;
