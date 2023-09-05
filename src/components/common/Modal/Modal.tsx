import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

import styles from "./Modal.module.scss";
import { ReactElement } from "react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "100vh", opacity: 0 },
};

const Modal = ({
  onClose,
  buttonLabel,
  children,
}: {
  onClose: () => void;
  buttonLabel?: string;
  children?: ReactElement[];
}) => {
  return (
    <Backdrop onClick={onClose}>
      <motion.div
        className={styles.Modal}
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles.ModalChildren}>{children}</div>
        <div>
          <hr></hr>
          <motion.button
            className={styles.ModalButton}
            type="button"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#fe0",
              color: "#222",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
          >
            {buttonLabel ? buttonLabel : "OK"}
          </motion.button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
