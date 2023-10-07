'use client';

import { FC, useRef } from 'react';
import styles from './ProjectCard.module.scss';
import { ProjectCardListProps } from './interfaces';
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '@components/animation/ScrollReveal';

const ProjectCardList: FC<ProjectCardListProps> = ({ data = [] }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollerRef,
  });

  const horizontal = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <div ref={scrollerRef} style={{ display: 'flex', height: '400vh' }}>
      <div
        style={{
          position: 'sticky',
          top: `calc(50vh - 16rem - 30px)`,
          height: 'fit-content',
          overflowX: 'hidden',
        }}
      >
        <h2 className={styles.heading}>Portfolio</h2>
        <motion.ul className={styles.ProjectCardList} style={{ x: horizontal }}>
          {data.map((project, i) => {
            return (
              <motion.li key={`project-${i}`}>
                <ScrollReveal>
                  <ProjectCard
                    title={project.title}
                    shortDesc={project.shortDesc}
                    desc={project.desc}
                    dateStarted={project.dateStarted}
                    dateEnded={project.dateEnded}
                    image={project.image}
                    imageAlt={project.imageAlt}
                    imageCaption={project.imageCaption}
                    githubLink={project.githubLink}
                    webLink={project.webLink}
                    pills={project.pills}
                  />
                </ScrollReveal>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default ProjectCardList;
