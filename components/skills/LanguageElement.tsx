import styles from './styles/LanguageElement.module.scss';

export interface LanguageElementProps {
  language: string,
  levelDescription: string
}

const LanguageElement: React.FC<LanguageElementProps> = ({language, levelDescription}) => {
  return <div className={styles.language_element}>
    <h4 className={styles.language}>{language}</h4>
    <span className={styles.levelDescription}>{levelDescription}</span>
  </div>;
};

export default LanguageElement;
