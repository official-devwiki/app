import {AnimatePresence, motion} from 'framer-motion';
import React, {ReactElement, ReactNode, useRef} from 'react';
import styled from 'styled-components';
import styles from '../Modal.module.scss';
import {XIcon} from '@components/common/icons/XIcon';
import {Button} from '@components/common/Button';

const ModalBody = styled.div`
  width: 100%;
`;

const ModalCloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.8em 1em;
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
              <ModalCloseButtonWrapper>
                <Button variant={'icon'} onClick={modalClose}>
                  <XIcon />
                </Button>
              </ModalCloseButtonWrapper>
              <ModalBody>
                {children}
              </ModalBody>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
