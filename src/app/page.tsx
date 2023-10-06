import Navbar from '@components/Navbar';

import styles from './page.module.scss';
import { HomeSection, AboutSection, PortfolioSection } from './_sections';
import Footer from '@/components/Footer';
import WIPModal from '@/components/WIPModal';

export default function Home() {
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
      <Footer />
      {/* WIP Modal */}
      <WIPModal />
    </>
  );
}
