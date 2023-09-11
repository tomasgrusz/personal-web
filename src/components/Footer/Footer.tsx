import Link from 'components/common/Link/Link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.licenses}>
        <label>
          Icons by <Link text="Icons8" link="https://icons8.com" external animate={false} /> and{' '}
          <Link
            text="react-icons"
            link="https://react-icons.github.io/react-icons"
            external
            animate={false}
          />
          .
        </label>
      </div>
    </div>
  );
};

export default Footer;
