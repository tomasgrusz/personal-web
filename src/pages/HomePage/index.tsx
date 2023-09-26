import Navbar from 'components/Navbar';

import styles from './index.module.scss';
import { HomeSection, AboutSection, PortfolioSection } from './sections';

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.HomePage}>
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
      </main>
    </>
  );
};

export default HomePage;
