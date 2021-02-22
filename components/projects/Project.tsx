import Button from '../UI/Button';
import styles from './styles/Project.module.scss';

export interface ProjectProps {
  project: object;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const {} = project;
  return (
    <article className={styles.project}>
      <div className={styles.projectImageContainer}>Image here</div>
      <div className={styles.projectContainer}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectName}>ProjectName</h3>
          <span className={styles.projectStatus}>Ongoing</span>
        </div>
        <ul className={styles.projectTech}>
          <li className={styles.projectTechBreadcrumb}></li>
        </ul>
      </div>
      <p className={styles.projectDescription}>
        This is where all the random information comes about the{' '}
        <span className={styles.projectTechHighlight}>Node.js</span> project.
      </p>
      <div className={styles.projectButtonContainer}>
        <Button buttonStyle={styles.projectButtonPrimary} text='Details' />
        <Button buttonStyle={styles.projectButtonSecondary} text='Check out live' />
      </div>
    </article>
  );
};

export default Project;
