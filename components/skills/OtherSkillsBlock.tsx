import { motion, AnimatePresence } from 'framer-motion';
import { fadeInGroup } from '../../transitions/fadeInGroup';
import SkillHeader from './SkillHeader';
import styles from './styles/OtherSkillsBlock.module.scss';

export interface OtherSkillsBlockProps {}


// TODO - Extract to default props
// Extract children, create a new SkillBlock element that is reusable for other skills.

const OtherSkillsBlock: React.FC<OtherSkillsBlockProps> = () => {
  return (
    <div className={styles.otherSkillsBlock}>
      <SkillHeader title='Other skills' subtitle='' />
      <AnimatePresence>
        <motion.ul
          variants={fadeInGroup}
          initial='hidden'
          animate='show'
          className={styles.skillsList}
        >
          <li className={styles.skill}>Curious, always looking to get better and learn new skills</li>
          <li className={styles.skill}>Fast and efficient learner, experienced teacher</li>
          <li className={styles.skill}>Disciplined and extremely patient.</li>
          <li className={styles.skill}>Excellent communication and people skills (ex-bartender)</li>
          <li className={styles.skill}>Organized and methodical, great teamworker</li>
          <li className={styles.skill}>Highly analytical, but focused on reality.</li>
          <li className={styles.skill}>Management and Leadership experience, also good follower</li>
          <li className={styles.skill}>Good business and financial awareness</li>
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default OtherSkillsBlock;
