import { motion } from 'framer-motion';
import { fadeInItem } from '../../transitions/fadeInGroup';
import styles from './styles/LanguageBlock.module.scss';

export interface LanguageElementProps {
  language: string;
  levelDescription: string;
}

const LanguageElement: React.FC<LanguageElementProps> = ({
  language,
  levelDescription,
}) => {
  return (
    <motion.div variants={fadeInItem} className={styles.languageElement}>
      <h4 className={styles.languageName}>{language}</h4>
      <span className={styles.languageDescription}>{levelDescription}</span>
    </motion.div>
  );
};

export default LanguageElement;
