'use client';

import { FC, MouseEvent, useState } from 'react';
import styles from './ProjectCard.module.scss';
import { ProjectCardProps } from './interfaces';
import { PillList } from '@components/common/Pill';
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
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = (e: MouseEvent) => {
    setToggle(!toggle);
  };

  return (
    <article
      className={`${styles.ProjectCard} ${toggle && styles.toggle}`}
      style={{
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={handleClick}
    >
      <Button text="More" onClick={handleClick} style={2} />
      <ul className={styles.date}>
        <li>
          <time>{dateStarted}</time>
        </li>
        <li>
          <time>{dateEnded}</time>
        </li>
      </ul>
      <div className={`${styles.content} ${toggle && styles.toggle}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{toggle ? desc : shortDesc}</p>
        {toggle && (
          <>
            <PillList pills={pills} randomColor sort />
            {githubLink && <Link href={githubLink} />}
            {webLink && <Link href={webLink} />}
          </>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
