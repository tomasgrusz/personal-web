import React from 'icons/React';
import styles from './AboutSection.module.scss';
import { SkillCardList } from 'components/SkillCard';
import skills from './data/skills.json';

const AboutSection = () => {
  return (
    <div className={styles.AboutSection}>
      <SkillCardList items={skills} animate />
    </div>
  );
};

export default AboutSection;
