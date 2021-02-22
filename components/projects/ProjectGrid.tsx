import styles from './styles/Project.module.scss';
import ProjectItem, { Project } from './ProjectItem';

export interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <section className={styles.projectsGrid}>
      <h2 className={styles.projectsGridHeader}>ProjectGridHeader</h2>
      <p className={styles.projectsGridDescription}></p>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
