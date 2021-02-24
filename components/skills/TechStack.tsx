import { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen ] = useState(false);
  
  const toggleOpen = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      {isModalOpen && (
        <div className={styles.overlay} onClick={toggleOpen} key='menu'></div>
      )}
      <div className={styles.techStackContainer}>
        <SkillHeader title='Skills & Stack' subtitle='' />
        <div className={styles.techStackGrid}>
          <TechStackBlock techList={languagesBlock} />
          <TechStackBlock techList={frontendBlock} />
          <TechStackBlock techList={backendBlock} />
          <TechStackBlock techList={otherBlock} />
        </div>
      </div>
    </>
  );
};

export default TechStack;
