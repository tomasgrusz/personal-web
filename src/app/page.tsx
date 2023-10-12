import Navbar from '@components/Navbar';

import styles from './page.module.scss';
import { HomeSection, AboutSection, PortfolioSection, ContactSection } from './_sections';
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
        <ContactSection />
      </main>
      <Footer />
      {/* WIP Modal */}
      <WIPModal />
    </>
  );
}
