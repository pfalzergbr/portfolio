import styles from './styles/TechStack.module.scss';
import { motion } from 'framer-motion';
import { fadeInItem } from '../../transitions/fadeInGroup';
import TechIcon from './TechIcon';

export interface LanguageElementProps {
  icon: string;
  label: string;
}

const LanguageElement: React.FC<LanguageElementProps> = ({ icon, label }) => {
  return (
    <motion.div variants={fadeInItem} className={styles.techStackElement}>
      <TechIcon icon={icon} />
      <span className={styles.techStackLabel}>{label}</span>
    </motion.div>
  );
};

export default LanguageElement;
