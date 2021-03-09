import Image from 'next/image';
// import { useRouter } from 'next/router';
// import Button from '../UI/Button';
import styles from './styles/Projects.module.scss';
import { RichText } from 'prismic-reactjs';

type ProjectStatus = 'Finished' | 'Ongoing' | 'On hold';

export interface ProjectProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectProps> = ({ project }) => {
  const {
    name,
    githubUrl,
    liveUrl,
    status,
    imageUrl,
    breadcrumbs,
    summary,
  } = project;

  return (
    <article className={styles.project}>
      <div className={styles.projectImageContainer}>
        {imageUrl && (
          <Image
            className={styles.image}
            src={imageUrl}
            alt='Project Screenshot'
            width={500}
            height={280}
            objectFit='cover'
          />
        )}
      </div>

      <div className={styles.projectHeader}>
        <h3 className={styles.projectName}>{name}</h3>
        <span className={styles.projectStatus}>{status}</span>
      </div>
      <ul className={styles.projectTech}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            className={styles.projectTechBreadcrumb}
            key={breadcrumb.breadcrumb + index}
          >
            {breadcrumb.breadcrumb}
          </li>
        ))}
      </ul>
      <div className={styles.projectSummary}>
        <RichText render={summary} />
      </div>
      {/* <p className={styles.projectSummary}>{summary}</p> */}
      <div className={styles.projectButtonContainer}>
        {/* <Button
          buttonStyle={styles.projectButtonPrimary}
          text='Details'
          onClick={handleCheckDetails}
        /> */}
        <a className={`${styles.projectButtonPrimary}`} href={liveUrl}>
          Live
        </a>
        <a className={`${styles.projectButtonSecondary}`} href={githubUrl}>
          Github
        </a>
      </div>
    </article>
  );
};

export default ProjectItem;
