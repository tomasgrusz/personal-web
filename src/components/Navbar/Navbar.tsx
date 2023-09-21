import styles from './Navbar.module.scss';

import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { BiHomeAlt2, BiCarousel } from 'react-icons/bi';
import { MdAlternateEmail } from 'react-icons/md';

import { AnimatedLogoSVG } from 'components/common/LogoSVG';
import Link from 'components/common/Link/Link';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <AnimatedLogoSVG size={48} />
      </div>
      <div className={styles.routes}>
        <Link icon={<BiHomeAlt2 />} text="Home" nav />
        <Link icon={<BsPerson />} text="About Me" nav />
        <Link icon={<BiCarousel />} text="Portfolio" nav />
        <Link icon={<MdAlternateEmail />} text="Contact Me" nav />
      </div>
      <div className={styles.links}>
        <Link icon={<BsLinkedin />} external link="https://www.linkedin.com/in/tomasgrusz/" />
        <Link icon={<BsGithub />} external link="https://github.com/tomasgrusz" />
      </div>
    </nav>
  );
};

export default Navbar;
