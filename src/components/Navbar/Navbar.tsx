import styles from './Navbar.module.scss';

import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { BiHomeAlt2, BiCarousel, BiCodeBlock, BiEnvelope } from 'react-icons/bi';

import Link from 'next/link';
import Image from 'next/image';
import mailLink from '@/utils/mailLink';
import Button from '../common/Button';
import { FaHashnode, FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <Image src={'/images/icon.png'} width={48} height={48} alt="Tomas Grusz logo" />
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
        <Link
          href="https://x.com/gruszdev"
          aria-label="Visit @gruszdev on X.com"
          target="_blank"
          className={styles.link}
          title="X.com"
        >
          <FaXTwitter />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
