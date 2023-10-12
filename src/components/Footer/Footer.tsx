import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.licenses}>
        <label>
          Icons by{' '}
          <Link href="https://icons8.com" target="_blank">
            Icons8
          </Link>{' '}
          and{' '}
          <Link href="https://react-icons.github.io/react-icons" target="_blank">
            react-icons
          </Link>
          .
        </label>
      </div>
    </footer>
  );
};

export default Footer;
