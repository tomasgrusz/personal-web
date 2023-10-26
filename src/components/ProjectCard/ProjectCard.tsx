'use client';

import { FC } from 'react';
import styles from './ProjectCard.module.scss';
import { ProjectCardProps } from './interfaces';
import Button from '@components/common/Button';
import Link from 'next/link';

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  shortDesc,
  desc,
  dateStarted,
  dateEnded = Date.now(),
  image,
  imageAlt,
  imageCaption,
  githubLink,
  webLink,
  pills,
}) => {
  return (
    <div
      className={styles.ProjectCard}
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Button text="Learn More" style={1} />
      <ul className={styles.date}>
        <li>
          <time>{dateStarted}</time>
        </li>
        <li>
          <time>{dateEnded}</time>
        </li>
      </ul>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{shortDesc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
