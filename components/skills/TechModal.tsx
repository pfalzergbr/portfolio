import Link from 'next/link';
import styles from './styles/TechModal.module.scss';
import TechIcon from './TechIcon';

export interface TechModalProps {}

const TechModal: React.FC<TechModalProps> = () => {
  return (
    <div className={styles.techModal}>
      <div className={styles.techModalContent}>
        <div className={styles.techModalHeader}>
          <TechIcon icon='typescript' />
          <h2 className={styles.techModalTitle}>TypeScript</h2>
        </div>
        <p className={styles.techModalDescription}>
          Superset of JavaScript, making it typesafe, and way more scalable.
          Since I switched from vanilla, It is definitely my preferred way to
          write JavaScript code.
        </p>
      </div>
      <div className={styles.techModalProjects}>
        <h3 className={styles.techModalProjectsHeader}>
          Check it out in projects:
        </h3>
        <ul className={styles.techModalProjectsList}>
          <Link href='#'>
            <li className={styles.techModalProject}>
              <h4 className={styles.techModalProjectTitle}>Haiku Project</h4>
              <p className={styles.techModalProjectDescription}>
                Recommends you haiku poems based on season and mood. A nice way
                for modern poets to share their work.
              </p>
            </li>
          </Link>
          <Link href='#'>
            <li className={styles.techModalProject}>
              <h4 className={styles.techModalProjectTitle}>
                Rock Paper Scissors
              </h4>
              <p className={styles.techModalProjectDescription}>
                Junior Dev classic rebuilt for practice, utilizing reusable
                TypeScript, and ships with a (free) Day-1 DLC: Lizard-Spock.
                Thanks, Dr Cooper.
              </p>
            </li>
          </Link>
          <Link href='#'>
            <li className={styles.techModalProject}>
              <h4 className={styles.techModalProjectTitle}>Bookish</h4>
              <p className={styles.techModalProjectDescription}>
                Buying books is cool. Reading them is even cooler. This
                application helps you schedule your reading, working through
                your shelf.
              </p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TechModal;
