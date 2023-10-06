import styles from './Moon.module.scss';

const Moon = () => {
  return (
    <div
      className={styles.moon}
      style={{
        backgroundImage: `radial-gradient(rgba(114, 57, 171, 0.5) 0%, rgba(114, 57, 171, 0.5) 100%), radial-gradient(rgba(200,200,200, 0.35) 0%, rgba(200,200,200, 0.55) 70%, rgba(200,200,200, 0.85) 100%), url(/images/moon.webp)`,
        boxShadow: '0 2px 80px 12px rgb(163, 122, 195), inset 16px -8px 16px 10px rgba(70, 40, 70)',
      }}
    ></div>
  );
};

export default Moon;
