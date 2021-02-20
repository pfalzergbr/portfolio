import TechStackBlock from './TechStackBlock';
import styles from './styles/TechStack.module.scss';
import SkillHeader from './SkillHeader';
import { Tech } from '../../data/techData';

export interface TechStackProps {
  techStack: {
    languagesBlock: Tech[];
    frontendBlock: Tech[];
    backendBlock: Tech[];
    otherBlock: Tech[];
  };
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  const { languagesBlock, frontendBlock, backendBlock, otherBlock } = techStack;
  return (
    <div className={styles.techStack_container}>
      <SkillHeader
        title='Skills & Stack'
        subtitle='technologies I have experience with'
      />
      <div className={styles.techStack_grid}>
        <TechStackBlock techList={languagesBlock} />
        <TechStackBlock techList={frontendBlock} />
        <TechStackBlock techList={backendBlock} />
        <TechStackBlock techList={otherBlock} />
      </div>
    </div>
  );
};

export default TechStack;
