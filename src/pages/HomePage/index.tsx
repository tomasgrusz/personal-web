import Navbar from 'components/Navbar';

import styles from './index.module.scss';
import { HomeSection, AboutSection } from './sections';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className={styles.HomePage}>
        <HomeSection />
        <AboutSection />
      </main>
    </>
  );
};

export default HomePage;
