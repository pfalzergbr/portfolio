import styles from './styles/TechStackBlock.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInGroup} from '../../transitions/fadeInGroup';
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
          className={styles.techStack_block}
        >
          {techList.map(({ icon, label }) => (
            <TechElement icon={icon} label={label} />
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TechStackBlock;
