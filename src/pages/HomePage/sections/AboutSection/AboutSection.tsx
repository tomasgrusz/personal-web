import styles from './AboutSection.module.scss';
import { SkillCardList } from 'components/SkillCard';
import skills from './data/skills.json';
import hero from './data/hero.json';
import ScrollReveal from 'components/animation';
import Hero from 'components/common/Hero';
import { images } from 'assets/undraw';

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <ScrollReveal>
        <Hero
          left
          text={hero[0].text}
          title={hero[0].title}
          image={images.DeveloperActivity}
          imageAlt={hero[0].imageAlt}
        />
      </ScrollReveal>
      <section>
        <ScrollReveal>
          <h2 className={styles.SkillsTitle}>
            Crafting the <span className={styles.ancient}>Digital Galaxy</span>
          </h2>
        </ScrollReveal>
        <SkillCardList items={skills} animate />
      </section>
      <ScrollReveal>
        <Hero
          text={hero[1].text}
          title={hero[1].title}
          image={images.CodeInspection}
          imageAlt={hero[1].imageAlt}
        />
      </ScrollReveal>
    </section>
  );
};

export default AboutSection;
