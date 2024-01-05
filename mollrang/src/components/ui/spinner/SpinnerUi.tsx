import { ReactElement } from "react";
import styled from "styled-components";

const SpinnerLayout = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;

  .loader {
    width: 36px;
    height: 36px;
    border: 4px solid var(--day_circle);
    border-bottom-color: var(--primary);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerUi = (): ReactElement => {
  return (
    <SpinnerLayout>
      <span className="loader" />
    </SpinnerLayout>
  );
};
