import { motion, useInView, useAnimation } from 'framer-motion';
import { FC, ReactNode, useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  vertical?: boolean;
  horizontal?: boolean;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, vertical = true, horizontal = false }) => {
  //check for accessibility setting to reduce motion
  const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (inView && !isReduced) {
      controls.start('default');
    }
  }, [inView]);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: vertical ? 100 : 0, x: horizontal ? -100 : 0 },
          default: { opacity: 1, y: 0, x: 0 },
        }}
        initial={isReduced ? 'default' : 'hidden'}
        animate={controls}
        transition={{
          duration: 0.75,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
