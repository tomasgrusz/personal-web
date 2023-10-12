import Cave from '@components/Cave';
import styles from './PortfolioSection.module.scss';
import projects from './data/projects.json';
import ProjectCardList from '@components/ProjectCard/ProjectCardList';

const PortfolioSection = () => {
  return (
    <section className={styles.PortfolioSection} id="portfolio">
      <Cave />
      <ProjectCardList data={[1, 2, 3, 4, 5].map((i) => projects[0])} />
      <Cave flip />
    </section>
  );
};

export default PortfolioSection;
