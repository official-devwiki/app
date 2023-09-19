import {AnimatePresence, motion} from 'framer-motion';
import React, {ReactElement, ReactNode, useRef} from 'react';
import styled from 'styled-components';
import styles from './Modal.module.scss';
import {XIcon} from '@components/common/icons/XIcon';
import {Button} from '@components/common/Button';

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(#a9a9a9, 0.44);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 199;
`;

const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 200px;
  font-size: 4vmin;
  border-radius: 14px 14px 0 0;
  box-shadow: 1px 10px 10px -4px rgba(0, 0, 0, 0.1);
`;


interface Props {
  isOpen: boolean;
  onRequestClose: (payload: boolean) => void;
  children: ReactNode;
}

export const BottomSlideModal = (props: Props): ReactElement => {
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
        <motion.div
          key={'bottom-modal-key'}
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
          className={styles.motion_modal}
        >
          <motion.div
            initial={{opacity: 1, y: 50}}
            transition={{ease: [0.17, 0.67, 0.83, 1]}}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 100,
              transitionEnd: {
                display: 'none',
              },
            }}
            className={styles.motion_modal_wrapper}
          >
            <div className={styles.motion_modal_body} ref={ele}>
              <Button variant={'icon'} onClick={modalClose}>
                <XIcon />
              </Button>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
