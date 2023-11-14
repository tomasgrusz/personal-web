'use client';

import { FC, MouseEvent, useState } from 'react';
import styles from './ProjectCard.module.scss';
import { ProjectCardProps } from './interfaces';
import { PillList } from '@components/common/Pill';
import Button from '@components/common/Button';
import Link from 'next/link';
import Image from 'next/image';
import { BsGithub, BsGlobe } from 'react-icons/bs';

const ProjectCardExtended: FC<ProjectCardProps> = ({
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
    <article className={styles.ProjectCardExtended}>
      <div
        className={styles.image}
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ul className={styles.date}>
          <li>
            <time>{dateStarted}</time>
          </li>
          <li>
            <time>{dateEnded}</time>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <PillList pills={pills} randomColor sort />
        <div className={styles.links}>
          {githubLink && (
            <Link href={githubLink} className={styles.link}>
              <BsGithub />
            </Link>
          )}
          {webLink && (
            <Link href={webLink} className={styles.link}>
              <BsGlobe />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCardExtended;
