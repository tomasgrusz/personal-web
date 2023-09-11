import { FC } from 'react';
import styles from './Link.module.scss';
import { LinkProps } from './interfaces';
import { Link as ReactLink } from 'react-router-dom';
import ScrollReveal from 'components/animation/ScrollReveal';

const Link: FC<LinkProps> = ({
  icon,
  text,
  external = false,
  nav = false,
  link = '',
  animate = true,
}) => {
  if (nav) {
    return (
      <div className={styles.linkNav}>
        {icon}
        {animate && (
          <ScrollReveal horizontal vertical={false}>
            {text}
          </ScrollReveal>
        )}
        {!animate && <>{text}</>}
      </div>
    );
  } else {
    return (
      <div className={styles.link}>
        {animate && (
          <ScrollReveal vertical={false}>
            <ReactLink
              to={link}
              target={external ? '_blank' : ''}
              rel={external ? 'noopener noreferrer' : ''}
            >
              {icon}
              {text}
            </ReactLink>
          </ScrollReveal>
        )}
        {!animate && (
          <ReactLink
            to={link}
            target={external ? '_blank' : ''}
            rel={external ? 'noopener noreferrer' : ''}
          >
            {icon}
            {text}
          </ReactLink>
        )}
      </div>
    );
  }
};

export default Link;
