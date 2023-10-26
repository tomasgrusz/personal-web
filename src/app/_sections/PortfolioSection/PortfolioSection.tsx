import Cave from '@components/Cave';
import styles from './PortfolioSection.module.scss';
import projects from './data/projects.json';
import ProjectCardList from '@components/ProjectCard/ProjectCardList';

const PortfolioSection = () => {
  return (
    <section className={styles.PortfolioSection} id="portfolio">
      <Cave />
      <ProjectCardList data={projects} />
      <Cave flip />
    </section>
  );
};

export default PortfolioSection;
