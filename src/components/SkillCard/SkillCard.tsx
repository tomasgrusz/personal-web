import { PillList } from 'components/common/Pill';
import styles from './SkillCard.module.scss';
import { FC } from 'react';
import { SkillCardListProps, SkillCardProps } from './interfaces';
import ScrollReveal from 'components/animation/ScrollReveal';

const SkillCard: FC<SkillCardProps> = ({ icon, title, description, pills }) => {
  return (
    <div className={styles.SkillCard}>
      {icon}
      <div className={styles.hero}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <PillList pills={pills} randomColor />
    </div>
  );
};

const SkillCardList: FC<SkillCardListProps> = ({ items, animate }) => {
  return (
    <div className={styles.SkillCardList}>
      {items.map((item) => {
        if (animate) {
          return (
            <ScrollReveal>
              <SkillCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                pills={item.pills}
              />
            </ScrollReveal>
          );
        } else {
          return (
            <SkillCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              pills={item.pills}
            />
          );
        }
      })}
    </div>
  );
};

export { SkillCard, SkillCardList };
