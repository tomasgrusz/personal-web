'use client';

import styles from './HomeSection.module.scss';
import Moon from '@components/Moon';
import Background from '@components/Background';
import ScrollReveal from '@components/animation';
import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => {
  return (
    <section className={`${styles.HomeSection} no-padding`} id="home">
      <Background />
      <ScrollReveal vertical={false}>
        <h1 className={styles.heading}>
          Frontend Developer & <span className={styles.gradient}>Design Enthusiast</span>
        </h1>
      </ScrollReveal>
      <Moon />
      <ScrollReveal>
        <TypeAnimation
          sequence={[
            '',
            2000,
            'Hi!',
            1000,
            "I'm Tomáš Grusz.",
            1000,
            "I'm Tomáš Grusz.\nNice to meet you!",
            1000,
            "I'm Tomáš Grusz.\nLet's explore the web dev universe!",
          ]}
          wrapper="h2"
          speed={25}
          deletionSpeed={65}
          style={{ display: 'inline-block', whiteSpace: 'pre-line' }}
          repeat={0}
          className={styles.greeting}
          defaultValue={"I'm Tomáš Grusz. Let's explore the web dev universe!"}
        />
      </ScrollReveal>
    </section>
  );
};

export default HomeSection;
