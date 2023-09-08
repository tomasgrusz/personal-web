import styles from './Moon.module.scss';
import moon from 'assets/moon.png';

const Moon = () => {
  return (
    <div
      className={styles.moon}
      style={{
        backgroundImage: `radial-gradient(rgba(200,200,200, 0.35) 0%, rgba(200,200,200, 0.55) 70%, rgba(200,200,200, 0.85) 100%), url(${moon})`,
      }}
    ></div>
  );
};

export default Moon;
