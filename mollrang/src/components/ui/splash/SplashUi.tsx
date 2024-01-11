import { ReactElement } from "react";
import styled from "styled-components";

const SplashContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: "red";
  width: 100vw;
  height: auto;
  min-height: 100vh;
  z-index: 9999;
`;

export const SplashUi = (): ReactElement => {
  return (
    <SplashContainer>
      <div>ims</div>
    </SplashContainer>
  );
};
