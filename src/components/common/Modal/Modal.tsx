import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

import styles from './Modal.module.scss';
import { ReactNode } from 'react';
import Button from '../Button';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: '100vh', opacity: 0 },
};

const Modal = ({
  onClose,
  buttonLabel,
  children,
}: {
  onClose: () => void;
  buttonLabel?: string;
  children?: ReactNode;
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
        <hr></hr>
        <Button text={buttonLabel ? buttonLabel : 'OK'} onClick={onClose} style={1} />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
