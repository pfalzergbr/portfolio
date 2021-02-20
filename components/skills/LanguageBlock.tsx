import styles from './styles/LanguageBlock.module.scss';
import SkillHeader from './SkillHeader';
import LanguageElement from './LanguageElement';

const LanguageBlock: React.FC = () => {
  return (
    <div className={styles.language_block}>
      <SkillHeader
        title='Languages'
        subtitle=''
      />
      <div className={styles.language_list}>
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
      </div>
    </div>
  );
};

export default LanguageBlock;
