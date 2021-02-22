import styles from './styles/TechStack.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInGroup } from '../../transitions/fadeInGroup';
import { Tech } from '../../data/techData';
import TechElement from './TechElement';

export interface TechStackBlockProps {
  techList: Tech[];
}

const TechStackBlock: React.FC<TechStackBlockProps> = ({ techList }) => {
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
            <TechElement icon={icon} label={label} key={icon + index}/>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TechStackBlock;
