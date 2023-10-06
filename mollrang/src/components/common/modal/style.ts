import styled from "styled-components";
import {motion} from "framer-motion";

export const ModalLayout = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.54);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 199;
`;

export const ModalContentsBox = styled.div`
  width: 100%;
`;

export const ModalCloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.8em 1em;
`;