import { Navbar } from 'components/Navbar/Navbar';
import WIPModal from 'components/WIPModal/WIPModal';

import styles from './index.module.scss';
import { HomeSection, AboutSection } from './sections';

const HomePage = () => {
  return (
    <>
      <div className={styles.HomePage}>
        <Navbar />
        <HomeSection />
        <AboutSection />
        {/* WIP Modal */}
        <WIPModal />
      </div>
    </>
  );
};

export default HomePage;
