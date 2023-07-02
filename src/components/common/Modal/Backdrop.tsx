import { motion } from "framer-motion";

import "./Backdrop.scss";
import { ReactNode } from "react";

const Backdrop = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <>
      <motion.div
        className="Backdrop"
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
