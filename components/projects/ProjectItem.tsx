import Button from '../UI/Button';
import styles from './styles/Projects.module.scss';

type ProjectStatus = 'finished' | 'ongoing' | 'onhold';

export interface Project {
  id: string;
  slug: string;
  priority: number;
  imageUrl: string;
  name: string;
  status: ProjectStatus;
  techBreadcrumbs: string[];
  summary: string;
}

export interface ProjectProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectProps> = ({ project }) => {
  const { name, status, techBreadcrumbs, summary } = project;

  const handleCheckDetails = () => {};

  return (
    <article className={styles.project}>
      <div className={styles.projectImageContainer}></div>

      <div className={styles.projectHeader}>
        <h3 className={styles.projectName}>{name}</h3>
        <span className={styles.projectStatus}>{status}</span>
      </div>
      <ul className={styles.projectTech}>
        {techBreadcrumbs.map((breadcrumb) => (
          <li className={styles.projectTechBreadcrumb}>{breadcrumb}</li>
        ))}
      </ul>
      <p className={styles.projectSummary}>{summary}</p>
      <div className={styles.projectButtonContainer}>
        <Button buttonStyle={styles.projectButtonPrimary} text='Details' />
        <a className={`${styles.projectButtonSecondary}`}>Check out live</a>
      </div>
    </article>
  );
};

export default ProjectItem;
