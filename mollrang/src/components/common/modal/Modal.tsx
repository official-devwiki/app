import React, {ComponentProps, ReactElement, ReactNode, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import {Button} from "@components/common/Button";
import {XIcon} from "@components/common/icons/XIcon";
import * as S from './style';
import {AnimatePresence, motion} from "framer-motion";

interface Props extends ComponentProps<"div"> {
  isOpen: boolean;
  onRequestClose: () => void;
  layerStyle?: React.CSSProperties;
  boxStyle?: React.CSSProperties;
  children: ReactNode;
}

export const Modal: React.FC<Props> = (props): ReactElement => {
  const {isOpen, onRequestClose, layerStyle, boxStyle, className, children} = props;
  const ele = useRef<HTMLDivElement>(null);
  const element =
    typeof window !== "undefined" &&
    (document.querySelector("#Modal") as HTMLDivElement);

  if (!element) return null;

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  const outsideClickModalClose = (e: React.MouseEvent) => {
    const {target} = e;
    if (ele && ele.current) {
      const elements = ele.current.contains(target as Node);
      if (!elements && onRequestClose) onRequestClose();
    }
  };

  const modalClose = () => {
    onRequestClose();
  };

  const bottomSlideModal = (): ReactElement => {
    return (
      <AnimatePresence>
          <motion.div
            key={'bottom-modal-key'}
            onClick={outsideClickModalClose}
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
            >
              <S.ModalBox ref={ele}>
                <S.ModalHeader>
                  <Button variant={'icon'} onClick={modalClose}>
                    <XIcon />
                  </Button>
                </S.ModalHeader>
                <S.ModalBody>
                  {children}
                </S.ModalBody>
              </S.ModalBox>
            </motion.div>
          </motion.div>
      </AnimatePresence>
    )
  }

  const fadeModal = (): ReactElement => {
    return (
      <AnimatePresence>
          <motion.div
            key={"fade-modal-key"}
            onClick={outsideClickModalClose}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <S.ModalContainer>
              <S.ModalBox ref={ele}>
                <S.ModalHeader>
                  <Button variant={'icon'} onClick={modalClose}>
                    <XIcon />
                  </Button>
                </S.ModalHeader>
                <S.ModalBody ref={ele}>
                  {children}
                </S.ModalBody>
              </S.ModalBox>
            </S.ModalContainer>
          </motion.div>
      </AnimatePresence>
    )
  }

  const fadeModal2 = (): ReactElement => {
    return (
      <AnimatePresence>
        <motion.div
          key={"fade-modal-key"}
          onClick={outsideClickModalClose}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <S.ModalContainer>
            <S.ModalBox ref={ele}>
              <S.ModalHeader>
                <Button variant={'icon'} onClick={modalClose}>
                  <XIcon />
                </Button>
              </S.ModalHeader>
              <S.ModalBody ref={ele}>
                {children}
              </S.ModalBody>
            </S.ModalBox>
          </S.ModalContainer>
        </motion.div>
      </AnimatePresence>
    )
  }

  const modalElement = (): ReactElement => {
    return (
      <S.ModalLayer onClick={outsideClickModalClose} >
        <S.ModalContainer>
          <S.ModalBox ref={ele} style={layerStyle}>
            <S.ModalHeader>
              <Button variant={'icon'} onClick={modalClose}>
                <XIcon />
              </Button>
            </S.ModalHeader>
            <S.ModalBody style={boxStyle} className={className} />
          </S.ModalBox>
        </S.ModalContainer>
      </S.ModalLayer>
    )
  }

  return <>{isOpen ? ReactDOM.createPortal(modalElement(), element) : null}</>;
}