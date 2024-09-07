import { FC } from 'react';
import styles from './Hero.module.scss';
import { HeroProps } from './interfaces';
import ScrollReveal from '@components/animation/ScrollReveal';
import Button from '../Button';
import mailLink from '@/utils/mailLink';

const Hero: FC<HeroProps> = ({
  left,
  animate = true,
  text,
  title,
  image,
  imageAlt,
  buttonText,
}) => {
  return (
    <ScrollReveal disable={!animate}>
      <section className={styles.Hero} style={left ? { flexDirection: 'row-reverse' } : {}}>
        <img className={styles.Image} src={image} alt={imageAlt}></img>
        <div
          className={styles.Text}
          style={{ textAlign: left ? 'right' : 'left', alignItems: left ? 'end' : 'start' }}
        >
          <h2 className={styles.Heading}>{title}</h2>
          <p className={styles.Paragraph}>{text}</p>
          {buttonText && <Button text={buttonText} style={2} link={mailLink} />}
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Hero;
