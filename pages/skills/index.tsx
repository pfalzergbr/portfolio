import TechStack from '../../components/skills/TechStack';
import styles from './index.module.scss';

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <main className={styles.skills}>
      <TechStack />
    </main>
  );
};

export default Skills;
