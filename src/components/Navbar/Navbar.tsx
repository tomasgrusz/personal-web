import styles from './Navbar.module.scss';

import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { BiHomeAlt2, BiCarousel } from 'react-icons/bi';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { AnimatedLogoSVG } from 'components/common/LogoSVG';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <AnimatedLogoSVG size={48} />
      </div>
      <div className={styles.routes}>
        <div className={styles.route}>
          <BiHomeAlt2 className={styles.routeLink} />
          Home
        </div>
        <div className={styles.route}>
          <BsPerson className={styles.routeLink} />
          About Me
        </div>
        <div className={styles.route}>
          <BiCarousel className={styles.routeLink} />
          Portfolio
        </div>
        <div className={styles.route}>
          <MdAlternateEmail className={styles.routeLink} />
          Contact Me
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.linkedin}>
          <Link
            to={'https://www.linkedin.com/in/tomasgrusz/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </Link>
        </div>
        <div className={styles.github}>
          <Link to={'https://github.com/tomasgrusz'} target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
