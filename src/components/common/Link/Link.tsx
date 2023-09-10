import { FC } from 'react';
import styles from './Link.module.scss';
import { LinkProps } from './interfaces';
import { Link as ReactLink } from 'react-router-dom';
import ScrollReveal from 'components/animation/ScrollReveal';

const Link: FC<LinkProps> = ({ icon, text, external = false, nav = false, link = '' }) => {
  if (nav) {
    return (
      <div className={styles.linkNav}>
        {icon}
        <ScrollReveal horizontal vertical={false}>
          {text}
        </ScrollReveal>
      </div>
    );
  } else {
    return (
      <div className={styles.link}>
        <ScrollReveal vertical={false}>
          <ReactLink
            to={link}
            target={external ? '_blank' : ''}
            rel={external ? 'noopener noreferrer' : ''}
          >
            {icon}
          </ReactLink>
        </ScrollReveal>
      </div>
    );
  }
};

export default Link;
