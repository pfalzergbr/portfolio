import Image  from 'next/image';
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
  const { name, status, imageUrl, techBreadcrumbs, summary } = project;

  const handleCheckDetails = () => {};

  return (
    <article className={styles.project}>
      <div className={styles.projectImageContainer}>
        {imageUrl && <Image 
        className={styles.image}
        src={imageUrl}
        alt='Project Screenshot'
        width={500}
        height={280}
        objectFit='cover'/>}
      </div>

      <div className={styles.projectHeader}>
        <h3 className={styles.projectName}>{name}</h3>
        <span className={styles.projectStatus}>{status}</span>
      </div>
      <ul className={styles.projectTech}>
        {techBreadcrumbs.map((breadcrumb, index) => (
          <li className={styles.projectTechBreadcrumb} key={breadcrumb + index}>{breadcrumb}</li>
        ))}
      </ul>
      <p className={styles.projectSummary}>{summary}</p>
      <div className={styles.projectButtonContainer}>
        <Button buttonStyle={styles.projectButtonPrimary} text='Details' />
        <a className={`${styles.projectButtonSecondary}`} href='#'>Live</a>
        <a className={`${styles.projectButtonSecondary}`} href='#'>Github</a>
      </div>
    </article>
  );
};

export default ProjectItem;
