import { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModalProps } from "@components/common/modal/ModalHandler";
import styled from "styled-components";
import useModalHook from "@hooks/useModalHook";
import { Button } from "@components/common/Button";
import { XIcon } from "@components/common/icons/XIcon";

const SideMenuContainer = styled(motion.aside)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`;

const SideMenuBody = styled(motion.div)`
  background: var(--primary);
  height: 100%;
  width: 300px;
  padding: 1em;
`;

export const SideNav = (props: ModalProps): ReactElement => {
  const { isOpen, ele } = props;
  const { onRequestClose, outerClickEvent } = useModalHook(ele);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  useEffect(() => {
    if (innerWidth <= 769) {
      onRequestClose();
    }
  }, [innerWidth]);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <SideMenuContainer
          onClick={outerClickEvent}
          key={"side-nav-key"}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <SideMenuBody
            initial={{ opacity: 1, x: 700 }}
            transition={{ ease: [0.17, 0.67, 0.83, 1] }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 700,
            }}
          >
            <Button variant={"icon"} onClick={onRequestClose}>
              <XIcon />
            </Button>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </SideMenuBody>
        </SideMenuContainer>
      )}
    </AnimatePresence>
  );
};
