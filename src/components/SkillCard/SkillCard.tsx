import { PillList } from 'components/common/Pill';
import styles from './SkillCard.module.scss';
import { FC } from 'react';
import { SkillCardListProps, SkillCardProps } from './interfaces';

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

const SkillCardList: FC<SkillCardListProps> = ({ items }) => {
  return (
    <div className={styles.SkillCardList}>
      {items.map((item) => (
        <SkillCard
          icon={item.icon}
          title={item.title}
          description={item.description}
          pills={item.pills}
        />
      ))}
    </div>
  );
};

export { SkillCard, SkillCardList };
