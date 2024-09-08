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
        <LighthouseSection />
        {/* ✅ Portfolio Section */}
        <PortfolioSection />
        {/* Hero 3 + GitHub */}
        <GitHubSection languages={languages} contributions={contributions} />
        {/* ✅ Technologies Section */}
        <TechnologiesSection />
        {/* Hero Section 3 */}
        <HeroSection1 />
        {/* Reward/Thank You Section */}
        {/* 
          Reward section will contain a short questionnaire form where I will ask 3 questions about myself.
          Answering all of them correctly will reward the user with a thank you message and a small gift code,
          which they can use to get a free coffee on me at a local coffee shop during their next visit.

          The catch in the questionnaire is that the last answer (years in the industry) will be a dynamic value,
          which is shown at the top of the page in the Statistics Section, where the user will probably need to scroll up to find the answer. But, the value will now be hidden there with a witty text "Gotcha!".

          We can create a cookie in the browser to make sure that the answer will not reveal itself if the user refreshes the page. However, on the original page, the answer will come back in around 1 minute.
        */}
        <HeroSection1 />
      </main>
      <Footer />
    </>
  );
}
