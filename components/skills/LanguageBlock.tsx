import { motion, AnimatePresence } from 'framer-motion';
import { fadeInGroup } from '../../transitions/fadeInGroup';
import styles from './styles/LanguageBlock.module.scss';
import SkillHeader from './SkillHeader';
import LanguageElement from './LanguageElement';

// TODO - Extract to default props
// Extract children, create a new SkillBlock element that is reusable for other skills.

const LanguageBlock: React.FC = () => {
  return (
    <div className={styles.language}>
      <SkillHeader title='Languages' subtitle='' />
      <AnimatePresence>
        <motion.div
          variants={fadeInGroup}
          initial='hidden'
          animate='show'
          className={styles.languageList}
        >
          <LanguageElement
            language='English'
            levelDescription='Fluent, living in the UK since 2012'
          />
          <LanguageElement
            language='Japanese'
            levelDescription='Ex-Japanese teacher, practically fluent'
          />
          <LanguageElement language='Hungarian' levelDescription='Native' />
          <LanguageElement
            language='Mandarin'
            levelDescription='Basic, ready to pick it up if necessary'
          />
          <LanguageElement
            language='Spanish'
            levelDescription='Four years in high school, inactive. Good understanding.'
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LanguageBlock;
