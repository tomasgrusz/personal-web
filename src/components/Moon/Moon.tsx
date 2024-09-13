import styles from './Moon.module.scss';

const calculateMoon = () => {
  const today = new Date();
  const isHalloween = today.getMonth() === 9 && today.getDate() === 31; // October is 9th month
  const isFridayThe13th = today.getDate() === 13 && today.getDay() === 5; // Friday is 5th day of the week
  const isChristmas = today.getMonth() === 11 && today.getDate() >= 22 && today.getDate() <= 31; // December is 11th month

  if (isHalloween) return 'pumpkinMoon';
  if (isFridayThe13th) return 'bloodMoon';
  if (isChristmas) return 'frostMoon';
  return 'normalMoon';
}

const Moon = () => {
  const moonType = calculateMoon();
  return (
    <div className={`${styles.moon} ${styles[moonType]}`}>
      {moonType !== 'normalMoon' && 
        <p className={styles.specialMoonText}>
          It's{' '}
          {moonType === 'pumpkinMoon' && 'Halloween! 🎃'}
          {moonType === 'bloodMoon' && 'Friday the 13th! 🩸'}
          {moonType === 'frostMoon' && 'Christmas time! ❄️'}
        </p>
      }
    </div>
  );
};

export default Moon;
