import { GetStaticProps } from 'next';
import LanguageBlock from '../../components/skills/LanguageBlock';
import TechStack from '../../components/skills/TechStack';
import AnimatedRoute from '../../layout/AnimatedRoute';
import {
  Tech,
  languagesBlock,
  frontendBlock,
  backendBlock,
  databaseBlock,
  otherBlock,
} from '../../data/techData';
import styles from './index.module.scss';
import OtherSkillsBlock from '../../components/skills/OtherSkillsBlock';

export interface SkillsProps {
  techStack: {
    languagesBlock: Tech[];
    frontendBlock: Tech[];
    backendBlock: Tech[];
    databaseBlock: Tech[];
    otherBlock: Tech[];
  };
}

const Skills: React.FC<SkillsProps> = ({ techStack }) => {
  return (
    <AnimatedRoute className={styles.skills}>
      <>
        <TechStack techStack={techStack} />
        <LanguageBlock />
        {/* <OtherSkillsBlock /> */}
      </>
    </AnimatedRoute>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      techStack: {
        languagesBlock,
        frontendBlock,
        backendBlock,
        databaseBlock,
        otherBlock,
      },
    },
  };
};

export default Skills;
