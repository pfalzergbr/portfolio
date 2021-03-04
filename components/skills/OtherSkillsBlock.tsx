import { motion, AnimatePresence } from 'framer-motion';
import { fadeInGroup, fadeInItem } from '../../transitions/fadeInGroup';
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
          <motion.li variants={fadeInItem} className={styles.skill}>
            Curious, always looking to get better and learn new skills
          </motion.li>
          <motion.li variants={fadeInItem} className={styles.skill}>
            Fast and efficient learner, experienced teacher
          </motion.li>
          <motion.li variants={fadeInItem} className={styles.skill}>
            Disciplined and extremely patient.
          </motion.li>
          <motion.li variants={fadeInItem} className={styles.skill}>
            Excellent communication and people skills (ex-bartender)
          </motion.li>
          <motion.li variants={fadeInItem} className={styles.skill}>
            Organized and methodical, great teamworker
          </motion.li>
          <motion.li variants={fadeInItem} className={styles.skill}>
            Highly analytical, but focused on reality.
          </motion.li>
          <motion.li variants={fadeInItem} className={styles.skill}>
            Management and Leadership experience, also good follower
          </motion.li>
          <motion.li variants={fadeInItem} className={styles.skill}>
            Good business and financial awareness
          </motion.li>
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default OtherSkillsBlock;
