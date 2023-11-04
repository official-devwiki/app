import {ReactElement, useEffect, useRef} from "react";
import {AnimatePresence, motion,} from 'framer-motion';

interface Props {
  isOpen: boolean;
}

export const SideNav = (props: Props): ReactElement => {
  const { isOpen } = props;
  const ele = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      { isOpen && (
        <motion.aside
          key={'side-nav-key'}
          initial={{opacity: 1}}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <motion.div
            initial={{opacity: 1, y: 700}}
            transition={{ease: [0.17, 0.67, 0.83, 1]}}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 700,
            }}
          >
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}