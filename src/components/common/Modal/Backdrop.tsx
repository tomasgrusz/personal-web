import { motion } from 'framer-motion';

import styles from './Backdrop.module.scss';
import { ReactNode } from 'react';

const Backdrop = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
  return (
    <>
      <motion.div
        className={styles.Backdrop}
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Backdrop;
