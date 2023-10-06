'use client';

import { motion } from 'framer-motion';
const icon = {
  hidden: {
    // opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  hiddenVar: {
    // opacity: 0,
    pathLength: 0,
    fill: 'rgba(119, 119, 221, 0)',
  },
  visible: {
    // opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
  visibleVar: {
    // opacity: 1,
    pathLength: 1,
    fill: 'rgba(119, 119, 221, 1)',
  },
};

const transition = {
  default: { duration: 1, ease: 'easeInOut' },
  fill: { duration: 1, ease: [1, 0, 0.8, 1] },
};

const transitionVar = {
  default: { duration: 1, ease: 'easeInOut' },
  fill: { duration: 1, ease: [1, 0, 0.8, 1] },
  delay: 1,
};

const AnimatedLogoSVG = ({ size }: { size: number }) => {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <defs>
        <mask id="hole1">
          <path fill="white" d="M0 0h500v500H0Z" />
          <path fill="black" d="M78.068 155.073a150 150 0 1 0 300 0a150 150 0 1 0 -300 0" />
        </mask>
        <mask id="hole2">
          <path fill="white" d="M0 0h500v500H0Z" />
          <path fill="black" d="M194.895 163.055a60 60 0 1 0 120 0a60 60 0 1 0 -120 0" />
        </mask>
        <mask id="hole3">
          <path fill="white" d="M0 0h500v500H0Z" />
          <path fill="black" d="M201.518 177.465a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
          <path fill="black" d="M247.187 91.076a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
          <path
            fill="black"
            mask="url(#hole2)"
            d="M115.104 158.816a100 100 0 1 0 200 0a100 100 0 1 0 -200 0"
          />
          <path fill="black" d="M227.676 51.44a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
        </mask>
        <mask id="hole4">
          <path fill="white" d="M0 0h500v500H0Z" />
          <path fill="black" d="M201.518 177.465a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
          <path fill="black" d="M247.187 91.076a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
          <path
            fill="black"
            mask="url(#hole2)"
            d="M115.104 158.816a100 100 0 1 0 200 0a100 100 0 1 0 -200 0"
          />
        </mask>
        <mask id="hole5">
          <path fill="white" d="M0 0h500v500H0Z" />
          <path fill="black" d="M172.765 194.75a60 60 0 1 0 120 0a60 60 0 1 0 -120 0" />
          <path fill="black" d="M215.257 106.687a60 60 0 1 0 120 0a60 60 0 1 0 -120 0" />
          <path fill="black" d="M145.104 158.816a70 70 0 1 0 140 0a70 70 0 1 0 -140 0" />
          <path fill="black" d="M101.914 84.729a70 70 0 1 0 140 0a70 70 0 1 0 -140 0" />
          <path fill="black" d="M103.97 230.6a70 70 0 1 0 140 0a70 70 0 1 0 -140 0" />
          <path fill="black" d="M78 151a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
          <path fill="black" d="M201 273a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
        </mask>
        <mask id="hole6">
          <path fill="white" d="M0 0h500v500H0Z" />
          <path fill="black" d="M145.104 158.816a70 70 0 1 0 140 0a70 70 0 1 0 -140 0" />
        </mask>
        <mask id="hole7">
          <path fill="white" d="M0 0h500v500H0Z" />
          <path fill="black" d="M247.187 91.076a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
        </mask>
        <mask id="hole8">
          <path fill="white" d="M0 0h500v500H0Z" />
          <path fill="black" d="M200 177a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
          <path fill="black" d="M200.518 205.465a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
          <path
            fill="black"
            transform="matrix(0.2, 0, 0, 0.2, 0, 0)"
            d="M857.743 953.911a200 200 0 1 0 400 0a200 200 0 1 0 -400 0"
          />
        </mask>
        <clipPath id="clip1">
          <path mask="url(#hole3)" d="M215.257 106.687a60 60 0 1 0 120 0a60 60 0 1 0 -120 0" />
          <path d="M139.778 129.012a70 70 0 1 0 140 0a70 70 0 1 0 -140 0" />
        </clipPath>
        <clipPath id="clip2">
          <path d="M267.187 131.076a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
        </clipPath>
        <clipPath id="clip3">
          <path d="M173.765 194.75a60 60 0 1 0 120 0a60 60 0 1 0 -120 0" />
          <path d="M103.97 230.6a70 70 0 1 0 140 0a70 70 0 1 0 -140 0" />
          <path d="M78 151a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
          <path d="M138.778 129.012a70 70 0 1 0 140 0a70 70 0 1 0 -140 0" />
          <path fill="black" d="M201 273a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
          <path d="M80 110a70 70 0 1 0 140 0a70 70 0 1 0 -140 0" />
        </clipPath>
        <clipPath id="clip4">
          <path fill="white" d="M284.175 160.053a40 40 0 1 0 80 0a40 40 0 1 0 -80 0" />
        </clipPath>
        <clipPath id="clip5">
          <path d="M190 195a55 55 0 1 0 110 0a55 55 0 1 0 -110 0" />
        </clipPath>
      </defs>
      <g transform="matrix(2, 0, 0, 2, 0, 0) translate(-100, -35)">
        <g>
          <motion.path
            stroke="white"
            fill="white"
            mask="url(#hole4)"
            clipPath="url(#clip1)"
            d="M194.895 163.055a60 60 0 1 0 120 0a60 60 0 1 0 -120 0"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={transition}
          />
          <motion.path
            stroke="white"
            fill="white"
            mask="url(#hole3)"
            d="M215.257 106.687a60 60 0 1 0 120 0a60 60 0 1 0 -120 0"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={transition}
          />
          <motion.path
            stroke="white"
            fill="white"
            clipPath="url(#clip4)"
            mask="url(#hole7)"
            d="M215.257 106.687a60 60 0 1 0 120 0a60 60 0 1 0 -120 0"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={transition}
          />
          <motion.path
            stroke="white"
            fill="white"
            mask="url(#hole5)"
            d="M115.104 158.819a100 100 0 1 0 200 0a100 100 0 1 0 -200 0"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={transition}
          />
        </g>

        <motion.path
          stroke="#77d"
          fill="#77d"
          mask="url(#hole6)"
          clipPath="url(#clip3)"
          d="M115.104 158.816a100 100 0 1 0 200 0a100 100 0 1 0 -200 0"
          variants={icon}
          initial="hiddenVar"
          animate="visibleVar"
          transition={transitionVar}
        />
        <motion.path
          stroke="#77d"
          fill="#77d"
          mask="url(#hole8)"
          clipPath="url(#clip5)"
          d="M115.104 158.816a100 100 0 1 0 200 0a100 100 0 1 0 -200 0"
          variants={icon}
          initial="hiddenVar"
          animate="visibleVar"
          transition={transitionVar}
        />
      </g>
    </svg>
  );
};

export default AnimatedLogoSVG;
