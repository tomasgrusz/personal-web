import Navbar from '@components/Navbar';

import styles from './page.module.scss';
import Footer from '@/components/Footer';
import EndorsementSection from './_sections/EndorsementSection/EndorsementSection';
import GitHubSection from './_sections/GitHubSection/GitHubSection';
import PartnersSection from './_sections/PartnersSection/PartnersSection';
import { HeroSection1, HeroSection2, HeroSection3 } from './_sections/HeroSection/HeroSection';
import PortfolioSection from './_sections/PortfolioSection/PortfolioSection';
import TechnologiesSection from './_sections/TechnologiesSection/TechnologiesSection';
import HomeSection from './_sections/HomeSection/HomeSection';
import StatisticsSection from './_sections/StatisticsSection/StatisticsSection';
import fetchLanguages, { Language } from './actions/fetchLanguages';
import fetchContributions from './actions/fetchContributions';
import LighthouseSection from './_sections/LighthouseSection/LighthouseSection';

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
        <HomeSection />
        <StatisticsSection totalContributions={totalContributions}/>
        <PartnersSection />
        <HeroSection1 />
        <EndorsementSection />
        <HeroSection2 />
        <LighthouseSection />
        <PortfolioSection />
        <GitHubSection languages={languages} contributions={contributions} />
        <TechnologiesSection />
        <HeroSection3 />
      </main>
      <Footer />
    </>
  );
}
