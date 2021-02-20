import { motion, AnimatePresence } from 'framer-motion';
import { fadeInGroup } from '../../transitions/fadeInGroup';
import styles from './styles/LanguageBlock.module.scss';
import SkillHeader from './SkillHeader';
import LanguageElement from './LanguageElement';

// TODO - Extract to default props

const LanguageBlock: React.FC = () => {
  return (
    <div className={styles.language_block}>
      <SkillHeader title='Languages' subtitle='' />
      <AnimatePresence>
        <motion.div
          variants={fadeInGroup}
          initial='hidden'
          animate='show'
          className={styles.language_list}
        >
          <LanguageElement
            language='English'
            levelDescription='Learning since the age of 7, living in the UK since 2012'
          />
          <LanguageElement
            language='Japanese'
            levelDescription='Ex-Japanese teacher, practically fluent. Bit rusty'
          />
          <LanguageElement language='Hungarian' levelDescription='Native' />
          <LanguageElement
            language='Mandarin'
            levelDescription='Basic, ready to pick it up if necessary'
          />
          <LanguageElement
            language='Spanish'
            levelDescription='Four years in high school, inactive. Good understanding'
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LanguageBlock;
