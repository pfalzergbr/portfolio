import styles from './styles/TechStack.module.scss';
import { motion } from 'framer-motion';
import { fadeInItem } from '../../transitions/fadeInGroup';
import TechIcon from './TechIcon';

export interface LanguageElementProps {
  tech: Tech;
  toggleOpenModal: () => void;
  changeModalContent: (content:Tech) => void;
}

const LanguageElement: React.FC<LanguageElementProps> = ({ tech, toggleOpenModal, changeModalContent }) => {
  const { icon, label } = tech;

  const openModal = () => {
    toggleOpenModal()
    changeModalContent(tech);
  }

  return (
    <motion.div variants={fadeInItem} className={styles.techStackElement} onClick={openModal}>
      <TechIcon icon={icon} />
      <span className={styles.techStackLabel}>{label}</span>
    </motion.div>
  );
};

export default LanguageElement;
