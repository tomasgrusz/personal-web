import styles from './HomeSection.module.scss';
import Moon from 'components/Moon/Moon';
import Background from 'components/Background/Background';

const HomeSection = () => {
  return (
    <div className={styles.HomeSection}>
      <Background />
      <h1 className={styles.heading}>
        Frontend Developer & <span className={styles.gradient}>Design Enthusiast</span>
      </h1>
      <Moon />
      <div className={styles.greeting}>
        <h2>Hi, I'm</h2>
        <h1 className={styles.name}>Tomáš Grusz</h1>
        <h2>Nice to meet you!</h2>
      </div>
    </div>
  );
};

export default HomeSection;
