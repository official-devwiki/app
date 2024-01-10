import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2em;
`;

export const ModalBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 14px;
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1);
`;
