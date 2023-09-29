import { PillList } from 'components/common/Pill';
import styles from './SkillCard.module.scss';
import { FC } from 'react';
import { SkillCardListProps, SkillCardProps } from './interfaces';
import { ScrollRevealList } from 'components/animation';

const SkillCard: FC<SkillCardProps> = ({ icon, title, description, pills, label }) => {
  return (
    <div className={styles.SkillCard} key={`skillcard-${title}`}>
      {icon}
      <div className={styles.hero}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.pillWrapper}>
        <h4>{label}</h4>
        <PillList pills={pills} randomColor />
      </div>
    </div>
  );
};

const SkillCardList: FC<SkillCardListProps> = ({ items, animate }) => {
  return (
    <ScrollRevealList className={styles.SkillCardList} disable={!animate}>
      {items.map((item, i) => (
        <SkillCard
          icon={item.icon}
          title={item.title}
          description={item.description}
          pills={item.pills}
          key={`skillcard-${i}`}
          label={item.label}
        />
      ))}
    </ScrollRevealList>
  );
};

export { SkillCard, SkillCardList };
