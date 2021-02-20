import LanguageBlock from '../../components/skills/LanguageBlock';
import TechStack from '../../components/skills/TechStack';
import AnimatedRoute from '../../layout/AnimatedRoute';
import styles from './index.module.scss';

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <AnimatedRoute>
      <main className={styles.skills}>
        <TechStack />
        <LanguageBlock />
      </main>
    </AnimatedRoute>
  );
};

export default Skills;
