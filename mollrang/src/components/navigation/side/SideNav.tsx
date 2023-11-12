import { ReactElement, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ModalProps } from "@components/common/modal/ModalHandler";
import useModalHook from "@hooks/useModalHook";
import { Button } from "@components/common/Button";
import {GuideIcon} from "@components/common/icons/GuideIcon";
import {Typography} from "@components/common/Typography";
import {Icons} from "@components/common/icons/Icons";
import * as S from './style';


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
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  const onResizeClose = () => {
    if (innerWidth <= 769) {
      onRequestClose();
    }
  }
  useEffect(() => {
    onResizeClose();
  }, [innerWidth]);

  return (
    <AnimatePresence>
      {isOpen && (
        <S.SideMenuContainer
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
          <S.SideMenuBody
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
            ref={ele}
          >
            <S.ButtonWrapper>
              <Button variant={"icon"} onClick={onRequestClose}>
                <Icons className={'icon'} type={"exit"} />
              </Button>
            </S.ButtonWrapper>

            <S.MenuLists>
              <S.MenuItems>
                <Button variant={"icon"}>
                  <GuideIcon className={'icon'} />
                  <Typography $variant={"caption"} as={"span"} $color={"textWhite"}>
                    가이드
                  </Typography>
                </Button>
              </S.MenuItems>
              <S.MenuItems>
                <Button variant={"icon"} >
                  <Icons className={'icon'} type={"chart"} />
                  <Typography $variant={"caption"} as={"span"} $color={"textWhite"}>
                    통계
                  </Typography>
                </Button>
              </S.MenuItems>
              <S.MenuItems>
                <Icons className={'icon'} type={"setting"} />
                <Typography $variant={"caption"} as={"span"} $color={"textWhite"}>
                  설정
                </Typography>
              </S.MenuItems>
            </S.MenuLists>
          </S.SideMenuBody>
        </S.SideMenuContainer>
      )}
    </AnimatePresence>
  );
};
