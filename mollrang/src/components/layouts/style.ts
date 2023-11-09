import styled from "styled-components";

export const Layout = styled.div`
  padding-bottom: 0;

  ${({ theme }) => theme.media.tablet} {
    padding-bottom: 74px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* height: 100%;
    min-height: 1000px; */
    height: auto;
    min-height: 100vh;
  }
`;

export const Main = styled.main`
  margin-top: 66px;
  height: 100%;
  display: flex;
`;
