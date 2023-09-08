import styles from './HomeSection.module.scss';
import background from 'assets/homesection-background.png';
import Moon from 'components/Moon/Moon';

const HomeSection = () => {
  return (
    <div
      className={styles.HomeSection}
      style={{
        backgroundImage: `linear-gradient(180deg, #121212 0%, rgba(18, 18, 18, 0.00) 100%), url(${background})`,
      }}
    >
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
