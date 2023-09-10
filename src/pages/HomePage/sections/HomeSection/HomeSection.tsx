import styles from './HomeSection.module.scss';
import Moon from 'components/Moon/Moon';
import Background from 'components/Background/Background';
import ScrollReveal from 'components/animation/ScrollReveal';
import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => {
  return (
    <div className={styles.HomeSection}>
      <Background />
      <ScrollReveal vertical={false}>
        <h1 className={styles.heading}>
          Frontend Developer & <span className={styles.gradient}>Design Enthusiast</span>
        </h1>
      </ScrollReveal>
      <Moon />
      <ScrollReveal>
        {/* <div className={styles.greeting}>
          <h2>Hi, I'm</h2>
          <h1 className={styles.name}>Tomáš Grusz</h1>
          <h2>Nice to meet you!</h2>
        </div> */}
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
          ]}
          wrapper="h1"
          speed={25}
          style={{ display: 'inline-block', whiteSpace: 'pre-line' }}
          repeat={0}
          className={styles.greeting}
        />
      </ScrollReveal>
    </div>
  );
};

export default HomeSection;
