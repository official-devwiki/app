import styled from "styled-components";

const ModalLayer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(#000, 0.54);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 199;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg_modal);
  width: 100%;
  min-height: 200px;
  height: auto;
  font-size: 4vmin;
  border-radius: 14px 14px 0 0;
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.8em 1em;
`;
const ModalBody = styled.div``;


export {
  ModalHeader,ModalBox, ModalBody, ModalContainer, ModalLayer
}