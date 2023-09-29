import { FC } from 'react';
import styles from './Link.module.scss';
import { LinkProps } from './interfaces';
import { Link as ReactLink } from 'react-router-dom';
import ScrollReveal from 'components/animation';

const Link: FC<LinkProps> = ({
  icon,
  text,
  external = false,
  nav = false,
  link = '',
  animate = true,
  ariaLabel,
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
        <ScrollReveal vertical={false} disable={!animate}>
          <ReactLink
            to={link}
            target={external ? '_blank' : ''}
            rel={external ? 'noopener noreferrer' : ''}
            aria-label={ariaLabel}
          >
            {icon}
            {text}
          </ReactLink>
        </ScrollReveal>
      </div>
    );
  }
};

export default Link;
