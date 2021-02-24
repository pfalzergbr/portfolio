import styles from './styles/TechStack.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInGroup } from '../../transitions/fadeInGroup';
import { Tech } from '../../data/techData';
import TechElement from './TechElement';

export interface TechStackBlockProps {
  techList: Tech[];
  toggleOpenModal: () => void;
}

const TechStackBlock: React.FC<TechStackBlockProps> = ({ techList, toggleOpenModal }) => {
  return (
    <AnimatePresence>
      <div>
        <motion.div
          variants={fadeInGroup}
          initial='hidden'
          animate='show'
          className={styles.techStackBlock}
        >
          {techList.map(({ icon, label }, index) => (
            <TechElement toggleOpenModal={toggleOpenModal} icon={icon} label={label} key={icon + index}/>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TechStackBlock;
