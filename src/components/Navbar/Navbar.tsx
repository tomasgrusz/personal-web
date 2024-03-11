import styles from './Navbar.module.scss';

import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { BiHomeAlt2, BiCarousel } from 'react-icons/bi';
import { MdAlternateEmail } from 'react-icons/md';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <Image src={'/images/icon1.png'} width={48} height={48} alt="Tomas Grusz logo" />
      </div>
      <div className={styles.routes}>
        <Link href="#home" className={styles.link}>
          <BiHomeAlt2 />
          Home
        </Link>
        <Link href="#about" className={styles.link}>
          <BsPerson />
          About Me
        </Link>
        <Link href="#portfolio" className={styles.link}>
          <BiCarousel />
          Portfolio
        </Link>
        <Link href="#contact" className={styles.link}>
          <MdAlternateEmail />
          Contact Me
        </Link>
      </div>
      <div className={styles.links}>
        <Link
          href="https://www.linkedin.com/in/tomasgrusz/"
          aria-label="Visit Tomas Grusz's LinkedIn"
          target="_blank"
          className={styles.link}
          title="LinkedIn"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://github.com/tomasgrusz"
          aria-label="Visit Tomas Grusz's GitHub"
          target="_blank"
          className={styles.link}
          title="GitHub"
        >
          <BsGithub />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
