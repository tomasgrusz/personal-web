import { Navbar } from 'components/Navbar/Navbar';
import WIPModal from 'components/WIPModal/WIPModal';

import styles from './index.module.scss';
import HomeSection from './HomeSection';

const HomePage = () => {
  return (
    <>
      <div className={styles.HomePage}>
        <Navbar />
        <HomeSection />
        {/* WIP Modal */}
        <WIPModal />
      </div>
    </>
  );
};

export default HomePage;
