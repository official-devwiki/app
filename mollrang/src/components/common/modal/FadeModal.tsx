import {AnimatePresence, motion} from 'framer-motion';
import React, {ReactElement, ReactNode, useRef} from 'react';
import styled from 'styled-components';
import styles from './Modal.module.scss';
import {Button} from "@components/common/Button";
import {XIcon} from "@components/common/icons/XIcon";

interface Props {
  isOpen: boolean;
  onRequestClose: (payload: boolean) => void;
  children: ReactNode;
}

const ModalBody = styled.div`
  width: 100%;
`;

const ModalCloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.8em 1em;
`;

export const FadeModal = (props: Props): ReactElement => {
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
          key={"fade-modal-key"}
          onClick={outerClickEvent}
          className={styles.motion_modal}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className={styles.motion_modal_wrapper}>
            <div className={styles.motion_modal_body} ref={ele}>
              <ModalCloseButtonWrapper>
                <Button variant={'icon'} onClick={modalClose}>
                  <XIcon />
                </Button>
              </ModalCloseButtonWrapper>
              <ModalBody ref={ele}>
                {children}
              </ModalBody>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}