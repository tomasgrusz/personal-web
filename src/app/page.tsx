import Navbar from '@components/Navbar';

import styles from './page.module.scss';
import Footer from '@/components/Footer';
import EndorsementSection from './_sections/EndorsementSection/EndorsementSection';
import GitHubSection from './_sections/GitHubSection/GitHubSection';
import PartnersSection from './_sections/PartnersSection/PartnersSection';
import { HeroSection1, HeroSection2 } from './_sections/HeroSection/HeroSection';
import PortfolioSection from './_sections/PortfolioSection/PortfolioSection';
import TechnologiesSection from './_sections/TechnologiesSection/TechnologiesSection';
import HomeSection from './_sections/HomeSection/HomeSection';
import StatisticsSection from './_sections/StatisticsSection/StatisticsSection';
import fetchLanguages, { Language } from './actions/fetchLanguages';
import fetchContributions from './actions/fetchContributions';

// revalidate: 1 day
export const revalidate = 60 * 60 * 24;

export default async function Home() {

  const contributions = await fetchContributions();
  const languages: Language[] = await fetchLanguages();

  const totalContributions = contributions.data.user.contributionsCollection.contributionCalendar.totalContributions;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.HomePage}>
        {/* ✅ Home Section */}
        <HomeSection />
        {/* ✅ Statistics Section */}
        <StatisticsSection totalContributions={totalContributions}/>
        {/* ✅ Partners Section */}
        <PartnersSection />
        {/* ✅ Hero 1 */}
        <HeroSection1 />
        {/* ✅ Endorsement Section */}
        <EndorsementSection />
        {/* Hero 2 + Lighthouse */}
        <HeroSection2 /> {/* TODO: add Lighthouse */}
        {/* ✅ Portfolio Section */}
        <PortfolioSection />
        {/* Hero 3 + GitHub */}
        <GitHubSection languages={languages} contributions={contributions} />
        {/* ✅ Technologies Section */}
        <TechnologiesSection />
        {/* Hero Section 3 */}
        <HeroSection1 />
        {/* Reward/Thank You Section */}
        <HeroSection1 />
      </main>
      <Footer />
    </>
  );
}
