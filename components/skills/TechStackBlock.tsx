import styles from './styles/TechStack.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInGroup } from '../../transitions/fadeInGroup';
import TechElement from './TechElement';

export interface TechStackBlockProps {
  techList: Tech[];
  toggleOpenModal: () => void;
  changeModalContent: (content:Tech) => void;
}

const TechStackBlock: React.FC<TechStackBlockProps> = ({ techList, toggleOpenModal, changeModalContent }) => {
  return (
    <AnimatePresence>
      <div>
        <motion.div
          variants={fadeInGroup}
          initial='hidden'
          animate='show'
          className={styles.techStackBlock}
        >
          {techList.map((tech, index) => (
            <TechElement toggleOpenModal={toggleOpenModal} tech={tech} changeModalContent={changeModalContent} key={tech.icon + index}/>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TechStackBlock;
