import styled from "styled-components";
import React, {ReactElement, ReactNode, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";

interface Props {
  isOpen: boolean;
  onRequestClose: (payload: boolean) => void;
  children: ReactNode;
}

const ModalLayout = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 119;
`;

const ModalContainer = styled(motion.div)`
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
  background: white;
  width: 100%;
  min-height: 200px;
  height: auto;
  border-radius: 14px 14px 0 0;
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1);
  
  z-index: 120;
`;

const ModalBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const ModalCloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.8em 1em;
  
`;

export const Modal = (props: Props): ReactElement => {
  const {isOpen, onRequestClose, children} = props;
  const ele = useRef<HTMLDivElement>(null);

  const modalClose = () => {
    onRequestClose(false);
  };

  const outerClickEvent = (e: React.MouseEvent) => {
    const {target} = e;
    if (ele && ele.current) {
      const elements = ele.current.contains(target as Node);
      if (!elements) modalClose();
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalLayout
          key={"fade-modal-key"}
          onClick={outerClickEvent}
          initial={{opacity: 1}}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            transitionEnd: {
              display: 'none',
            },
          }}
        >
          <ModalContainer
            initial={{opacity: 0, y: 900}}
            transition={{ease: [0.17, 0.67, 0.83, 1]}}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 900,
              transitionEnd: {
                display: 'none',
              },
            }}
          >
            <ModalBox ref={ele}>
              <ModalCloseButtonWrapper>
                <button onClick={modalClose}>
                  x
                </button>
              </ModalCloseButtonWrapper>
              <ModalBody ref={ele}>
                {children}
              </ModalBody>
            </ModalBox>
          </ModalContainer>
        </ModalLayout>
      )}
    </AnimatePresence>
  )
}