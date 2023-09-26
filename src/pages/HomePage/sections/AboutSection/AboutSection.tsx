import styles from './AboutSection.module.scss';
import { SkillCardList } from 'components/SkillCard';
import skills from './data/skills.json';
import hero from './data/hero.json';
import ScrollReveal from 'components/animation';
import Hero from 'components/common/Hero';
import { images } from 'assets/undraw';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <Hero
        left
        text={
          <>
            I'm a React Frontend Developer currently based in{' '}
            <span className="BOLD">Prague, Czech Republic</span>. My journey in web development
            began with a solid foundation in Computer Science from the{' '}
            <Link to="https://www.birmingham.ac.uk" target="_blank" rel="noopener noreferrer">
              University of Birmingham
            </Link>
            . I've had the privilege of working on diverse projects, where I've learned the value of
            collaboration and problem-solving in the world of web development. I look forward to
            continuing this journey, contributing to innovative solutions, and working alongside
            talented professionals.
          </>
        }
        title={hero[0].title}
        image={images.DeveloperActivity}
        imageAlt={hero[0].imageAlt}
        buttonText={hero[0].buttonText}
      />
      <section>
        <ScrollReveal>
          <h2 className={styles.SkillsTitle}>
            Crafting the <span className={styles.ancient}>Digital Galaxy</span>
          </h2>
        </ScrollReveal>
        <SkillCardList items={skills} animate />
      </section>
      <Hero
        text={hero[1].text}
        title={hero[1].title}
        image={images.CodeInspection}
        imageAlt={hero[1].imageAlt}
      />
    </section>
  );
};

export default AboutSection;
