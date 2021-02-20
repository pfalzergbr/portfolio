import { motion } from 'framer-motion';
import { fadeInItem } from '../../transitions/fadeInGroup';
import styles from './styles/LanguageElement.module.scss';

export interface LanguageElementProps {
  language: string;
  levelDescription: string;
}

const LanguageElement: React.FC<LanguageElementProps> = ({
  language,
  levelDescription,
}) => {
  return (
    <motion.div variants={fadeInItem} className={styles.language_element}>
      <h4 className={styles.language}>{language}</h4>
      <span className={styles.levelDescription}>{levelDescription}</span>
    </motion.div>
  );
};

export default LanguageElement;
