import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './styles/TechModal.module.scss';
import TechIcon from './TechIcon';
import { Tech } from '../../data/techData';
import { modalTransition } from '../../transitions/modalTransition';
//Add connection

export interface TechModalProps {
  techData: Tech;
}

const TechModal: React.FC<TechModalProps> = ({ techData }) => {
  const { icon, label, description, projects } = techData;


  return (
    <motion.div
      initial='initial'
      animate='enter'
      exit='exit'
      variants={modalTransition}
      className={styles.techModal}
    >
      <div className={styles.techModalContent}>
        <div className={styles.techModalHeader}>
          <TechIcon icon={icon} />
          <h2 className={styles.techModalTitle}>{label}</h2>
        </div>
        <p className={styles.techModalDescription}>{description}</p>
      </div>
      {projects && (
        <div className={styles.techModalProjects}>
          <h3 className={styles.techModalProjectsHeader}>
            Check it out in projects:
          </h3>
          <ul className={styles.techModalProjectsList}>
            {projects.map((project) => {
              return (
                <Link key={project.title} href={project.path}>
                  <li className={styles.techModalProject}>
                    <h4 className={styles.techModalProjectTitle}>
                      {project.title}
                    </h4>
                    <p className={styles.techModalProjectDescription}>
                      {project.snippet}
                    </p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default TechModal;
