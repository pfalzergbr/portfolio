import LanguageBlock from '../../components/skills/LanguageBlock';
import TechStack from '../../components/skills/TechStack';
import AnimatedRoute from '../../layout/AnimatedRoute';
import styles from './index.module.scss';
import { Tech, languagesBlock, frontendBlock, backendBlock, otherBlock } from '../../data/techData';

export interface SkillsProps {
  techStack: {
    languagesBlock: Tech[];
    frontendBlock: Tech[];
    backendBlock: Tech[];
    otherBlock: Tech[];
  };
}

const Skills: React.FC<SkillsProps> = ({ techStack }) => {
  return (
    <AnimatedRoute>
      <main className={styles.skills}>
        <TechStack techStack={techStack}/>
        <LanguageBlock />
      </main>
    </AnimatedRoute>
  );
};


export const getStaticProps = async () => {
  return {
    props: {
      techStack: {
        languagesBlock,
        frontendBlock,
        backendBlock,
        otherBlock
      }
    }
  }
};

export default Skills;
