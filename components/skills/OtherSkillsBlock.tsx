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
        <motion.div
          variants={fadeInGroup}
          initial='hidden'
          animate='show'
          className={styles.language_list}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OtherSkillsBlock;