import { PillProps } from 'components/common/Pill/interfaces';
import { ReactNode } from 'react';

export interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  pills: PillProps[];
}

export interface SkillCardListProps {
  items: SkillCardProps[];
}
