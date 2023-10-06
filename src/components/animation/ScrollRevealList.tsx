'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { FC, ReactNode, useEffect, useRef } from 'react';

interface ScrollRevealListProps {
  children: ReactNode[];
  disable?: boolean;
  isList?: boolean;
  className?: string;
  childrenClassName?: string;
}

const ScrollRevealList: FC<ScrollRevealListProps> = ({
  children,
  disable = false,
  className,
  childrenClassName,
}) => {
  //check for accessibility setting to reduce motion
  const isReduced =
    // window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true ||
    disable;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { once: true });

  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    default: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    default: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (inView && !isReduced) {
      controls.start('default');
    }
  }, [inView]);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.ul
        className={className}
        variants={containerVariants}
        initial={isReduced ? 'default' : 'hidden'}
        animate={isReduced ? undefined : controls}
      >
        {children.map((child: ReactNode, index: number) => (
          <motion.li
            key={index}
            className={childrenClassName}
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            {child}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ScrollRevealList;
