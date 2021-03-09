import styles from './styles/Projects.module.scss';
import ProjectItem from './ProjectItem';

export interface ProjectGridProps {
  header: string;
  description: string;
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  header,
  description,
}) => {
  return (
    <section className={styles.projectsGrid}>
      <div>
        <h1 className={styles.projectsGridHeader}>{header}</h1>
        <p className={styles.projectsGridDescription}>{description}</p>
      </div>
      <div className={styles.projectsGridContainer}>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
