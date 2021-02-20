import LanguageBlock from '../../components/skills/LanguageBlock';
import TechStack from '../../components/skills/TechStack';
import styles from './index.module.scss';

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <main className={styles.skills}>
      <TechStack />
      <LanguageBlock />
    </main>
  );
};

export default Skills;
