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
  border-radius: 100px;
  box-shadow: 3px 4px 11px 0 #00000040;
  
  &.success {
    background: var(--primary_opacity);
  }

  &.error {
    background-color: var(--error_opacity);
  }

  &.warning {
    background-color: var(--warning_opacity);
  }
  
  &.active {
    opacity: 100%;
    bottom: 150px;
  }
`;

export const ToastBox = styled.div`
  padding: 10px 50px;
  border-radius: 100px;

  text-align: center;
`;
