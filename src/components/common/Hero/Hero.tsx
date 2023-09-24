import { FC } from 'react';
import styles from './Hero.module.scss';
import { HeroProps } from './interfaces';
import ScrollReveal from 'components/animation/ScrollReveal';

const Hero: FC<HeroProps> = ({ left, animate = true, text, title, image, imageAlt }) => {
  return (
    <ScrollReveal disable={!animate}>
      <section className={styles.Hero} style={left ? { flexDirection: 'row-reverse' } : {}}>
        <img className={styles.Image} src={image} alt={imageAlt}></img>
        <div className={styles.Text} style={{ textAlign: left ? 'right' : 'left' }}>
          <h3 className={styles.Heading}>{title}</h3>
          <p className={styles.Paragraph}>{text}</p>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Hero;
