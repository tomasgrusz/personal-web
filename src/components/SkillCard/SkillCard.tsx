import { PillList } from 'components/common/Pill';
import styles from './SkillCard.module.scss';
import { FC } from 'react';
import { SkillCardListProps, SkillCardProps } from './interfaces';
import ScrollReveal from 'components/animation';

const SkillCard: FC<SkillCardProps> = ({ icon, title, description, pills }) => {
  return (
    <div className={styles.SkillCard} key={`skillcard-${title}`}>
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
      {items.map((item, i) => {
        if (animate) {
          return (
            <ScrollReveal key={`skillcard-wrapper-${i}`}>
              <SkillCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                pills={item.pills}
                key={`skillcard-${i}`}
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
              key={`skillcard-${i}`}
            />
          );
        }
      })}
    </div>
  );
};

export { SkillCard, SkillCardList };
