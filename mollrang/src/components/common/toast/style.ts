import styled from "styled-components";

export const ToastLayout = styled.div`
  width: 100%;
  max-width: fit-content;
  min-width: 360px;
  opacity: 0;
  position: fixed;
  bottom: -100px;
  left: 50%;
  transform: translate(-50%, 0);
  transition: all 0.5s;

  &.active {
    animation: fadeout 4.5s;
    opacity: 100%;
    bottom: 150px;
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.4;
    }
  }
`;

export const ToastBox = styled.div`
  padding: 10px 50px;
  border-radius: 100px;
  background: var(--primary_opacity);
  color: #fff;
  box-shadow: 3px 4px 11px 0px #00000040;
`;
