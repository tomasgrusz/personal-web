'use client';
import styles from './Navbar.module.scss';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { BiHomeAlt2, BiCarousel, BiCodeBlock, BiEnvelope } from 'react-icons/bi';

import Link from 'next/link';
import Image from 'next/image';
import mailLink from '@/utils/mailLink';
import Button from '../common/Button';
import { FaHashnode } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="48" height="48">
          <motion.path
            style={{ strokeWidth: 25, strokeOpacity: 1 }}
            fill="none"
            stroke="white"
            stroke-width="25"
            stroke-opacity="1"
            d="M 150 150 L 100 100 L 400 100 L 250 100 L 150 300 L 250 400 L 350 200 L 100 200"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          ></motion.path>
        </svg>
      </div>
      <div className={styles.routes}>
        <Link href="#home" className={styles.link}>
          <BiHomeAlt2 />
          Home
        </Link>
        <Link href="#about" className={styles.link}>
          <BsPerson />
          About
        </Link>
        <Link href="#portfolio" className={styles.link}>
          <BiCarousel />
          Portfolio
        </Link>
        <Link href="#tech" className={styles.link}>
          <BiCodeBlock />
          Technology
        </Link>
        <Button
          icon={<BiEnvelope />}
          text={'Contact Me'}
          link={mailLink}
          className={styles.mainLink}
        />
      </div>
      <div className={styles.links}>
        <Link
          href="https://www.linkedin.com/in/tomasgrusz/"
          aria-label="Visit @tomasgrusz on LinkedIn"
          target="_blank"
          className={styles.link}
          title="LinkedIn"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://github.com/tomasgrusz"
          aria-label="Visit @tomasgrusz on GitHub"
          target="_blank"
          className={styles.link}
          title="GitHub"
        >
          <BsGithub />
        </Link>
        <Link
          href="https://blog.grusz.dev/"
          aria-label="Visit my blog"
          target="_blank"
          className={styles.link}
          title="Blog"
        >
          <FaHashnode />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
