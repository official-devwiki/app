import styled from "styled-components";

export const ToastLayout = styled.div`
  opacity: 0;
  position: fixed;
  bottom: -100px;
  left: 50%;
  transform: translate(-50%,0);
  transition: all 0.5s;

  &.active {
    opacity: 100%;
    bottom: 50px;  
  }
`;

export const ToastBox = styled.div`
  padding: 10px 50px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.70);
  color: #fff;
  box-shadow: 3px 4px 11px 0px #00000040;
`;