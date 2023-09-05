import { Navbar } from 'components/Navbar/Navbar';
import WIPModal from 'components/WIPModal/WIPModal';

import styles from './index.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={styles.HomePage}>
        <Navbar />
        {/* WIP Modal */}
        <WIPModal />
      </div>
    </>
  );
};

export default HomePage;
