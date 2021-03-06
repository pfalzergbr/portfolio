import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './styles/TechModal.module.scss';
import TechIcon from './TechIcon';
import { Tech } from '../../data/techData';
import { modalTransition } from '../../transitions/modalTransition';
import ParsedBlock from '../../utils/block/ParsedBlock';
//Add connection

export interface TechModalProps {
  techData: Tech;
  toggleOpenModal: () => void;
}

const TechModal: React.FC<TechModalProps> = ({ techData, toggleOpenModal }) => {
  const { icon, label, description, projects } = techData;

  return (
    <motion.div
      initial='initial'
      animate='enter'
      exit='exit'
      variants={modalTransition}
      className={styles.techModal}
    >
      <div className={styles.techModalContainer}>
        <div className={styles.techModalContent}>
          <div className={styles.techModalHeader}>
            <TechIcon icon={icon} />
            <h2 className={styles.techModalTitle}>{label}</h2>
            <button
              onClick={toggleOpenModal}
              className={styles.techModalCloseButton}
            >
              Close
            </button>
          </div>
          <ParsedBlock className={styles.techModalDescription} content={description} spanClass={styles.highlight} />
        </div>
        {projects && (
          <div className={styles.techModalProjects}>
            <h3 className={styles.techModalProjectsHeader}>
              Check it out in these projects:
            </h3>
            <ul className={styles.techModalProjectsList}>
              {projects.map((project) => {
                return (
                  <Link key={project.title} href={project.path}>
                    <li className={styles.techModalProject}>
                      <h4 className={styles.techModalProjectTitle}>
                        {project.title}
                      </h4>
                      <ParsedBlock className={styles.techModalProjectDescription} content={project.snippet}/>
                       {/* <p className={styles.techModalProjectDescription}>
                         {project.snippet}
                       </p> */}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TechModal;
