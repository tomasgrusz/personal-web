import styles from './AboutSection.module.scss';
import { SkillCardList } from 'components/SkillCard';
import skills from './data/skills.json';
import ScrollReveal from 'components/animation';

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <ScrollReveal>
        <h2 className={styles.SkillsTitle}>
          Crafting the <span className={styles.ancient}>Digital Galaxy</span>
        </h2>
      </ScrollReveal>
      <SkillCardList items={skills} animate />
    </section>
  );
};

export default AboutSection;
