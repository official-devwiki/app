import {ReactElement} from "react";
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import {BsQuestionLg} from "react-icons/bs";
import Image from 'next/image';

const SplashContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00C7AE;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  z-index: 9999;
`;

const SplashBody = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 4vh;

  .title {
    position: relative;
    left: 18px;
  }
`;

export const SplashUi = (props: { isOpen: boolean }): ReactElement => {
  const {isOpen} = props;
  return (
    <AnimatePresence>
      {isOpen && (
        <SplashContainer
          key={"mollrang-splash-key"}
          exit={{opacity: 0}}
          initial={{opacity: 0}}
          animate={{opacity: 1}}>
          <SplashBody>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <Image priority className={'title'} src={'/images/splash-title.png'} width={144} height={62}
                     alt={'mollrang-splash-img'}/>
            </motion.div>
            <motion.div
              initial={{scale: 0}}
              animate={{rotate: 380, scale: 1}}
              transition={{
                delay: 1.5,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <BsQuestionLg size={80} color={"#FFC700"}/>

            </motion.div>
          </SplashBody>
        </SplashContainer>
      )}

    </AnimatePresence>
  );
};
