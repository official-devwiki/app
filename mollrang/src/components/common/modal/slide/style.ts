import styled from "styled-components";
import {motion} from "framer-motion";

export const ModalContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const ModalBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 100%;
  min-height: 550px;
  height: auto;
  font-size: 4vmin;
  border-radius: 22px 22px 0 0;
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1);
`;
