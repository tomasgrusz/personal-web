import { PillProps } from '@components/common/Pill/interfaces';

export interface ProjectCardProps {
  title: string;
  shortDesc?: string;
  desc: string;
  dateStarted: string;
  dateEnded: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  githubLink?: string;
  webLink?: string;
  pills: PillProps[];
}

export interface ProjectCardListProps {
  data: ProjectCardProps[];
}
