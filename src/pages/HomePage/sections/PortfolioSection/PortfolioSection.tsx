import Cave from 'components/Cave';
import styles from './PortfolioSection.module.scss';

const PortfolioSection = () => {
  return (
    <section className={styles.PortfolioSection}>
      <Cave />
      <Cave flip />
    </section>
  );
};

export default PortfolioSection;
