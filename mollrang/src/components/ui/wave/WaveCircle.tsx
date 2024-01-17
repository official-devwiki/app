import styled from "styled-components";
import { ReactElement } from "react";

export const Wave = styled.div`
  .frame {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 50px;
  }

  .wrap {
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    background: rgb(171, 255, 248);
    background: linear-gradient(
      180deg,
      rgba(171, 255, 248, 1) 37%,
      rgba(255, 228, 192, 1) 81%
    );

    box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
    transform: translate3d(0, 0, 0);
  }

  .wave {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 60%;
    left: -42%;
    border-radius: 43%;
    animation: drift 4s infinite linear;
    background: rgba(255, 255, 255, 0.4);
  }

  .wave.layer_1 {
    animation: drift 8s infinite linear;
    background: rgba(255, 255, 255, 0.2);
  }

  @keyframes drift {
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const WaveCircle = (): ReactElement => {
  return (
    <Wave>
      <div className="frame">
        <div className="wrap">
          <div className="wave"></div>
          <div className="wave layer_1"></div>
        </div>
      </div>
    </Wave>
  );
};
