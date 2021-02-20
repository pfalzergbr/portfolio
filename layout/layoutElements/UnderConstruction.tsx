import styles from './styles/UnderConstruction.module.scss';

const UnderConstruction: React.FC = () => {
  return (
    <div className={styles.underConstruction}>
      <h1 className={styles.title}>Page Under Construction</h1>
      <h2 className={styles.subtitle}>
        {' '}
        Feel free to check out my{' '}
        <a className={styles.headerlink} href='https://github.com/pfalzergbr'>
          Github
        </a>{' '}
        in the meantime.
      </h2>
    </div>
  );
};

export default UnderConstruction;
