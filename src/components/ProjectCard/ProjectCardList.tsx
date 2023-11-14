'use client';

import { FC, useRef, useState } from 'react';
import styles from './ProjectCard.module.scss';
import { ProjectCardListProps } from './interfaces';
import ProjectCard from './ProjectCard';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '@components/animation/ScrollReveal';
import Modal from '../common/Modal';
import Backdrop from '../common/Modal/Backdrop';
import ProjectCardExtended from './ProjectCardExtended';

const ProjectCardList: FC<ProjectCardListProps> = ({ data = [] }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollerRef,
  });

  const horizontal = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div ref={scrollerRef} style={{ display: 'flex', height: '400vh' }}>
      <div
        style={{
          position: 'sticky',
          top: `0`,
          height: '100vh',
          overflowX: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h2 className={styles.heading}>Portfolio</h2>
        <motion.ul className={styles.ProjectCardList} style={{ x: horizontal }}>
          {data.map((project, i) => {
            return (
              <motion.li
                key={`project-${i}`}
                layoutId={`${i}`}
                onClick={() => setSelectedId(`${i}`)}
              >
                <ProjectCard {...project} />
              </motion.li>
            );
          })}
        </motion.ul>
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <Backdrop onClick={() => setSelectedId(null)}>
                <ProjectCardExtended {...data[Number(selectedId)]} />
              </Backdrop>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCardList;
