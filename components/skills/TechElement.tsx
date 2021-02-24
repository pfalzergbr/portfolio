import styles from './styles/TechStack.module.scss';
import { motion } from 'framer-motion';
import { fadeInItem } from '../../transitions/fadeInGroup';
import TechIcon from './TechIcon';

export interface LanguageElementProps {
  icon: string;
  label: string;
  toggleOpenModal: () => void;
}

const LanguageElement: React.FC<LanguageElementProps> = ({ icon, label, toggleOpenModal }) => {
  return (
    <motion.div variants={fadeInItem} className={styles.techStackElement} onClick={toggleOpenModal}>
      <TechIcon icon={icon} />
      <span className={styles.techStackLabel}>{label}</span>
    </motion.div>
  );
};

export default LanguageElement;
