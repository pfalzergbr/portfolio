import { useState } from 'react';
import TechStackBlock from './TechStackBlock';
import styles from './styles/TechStack.module.scss';
import SkillHeader from './SkillHeader';
import { Tech } from '../../data/techData';
import SkillModal from './TechModal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const toggleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <div className={styles.overlay} onClick={toggleOpenModal} key='menu'></div>
      )}
      {isModalOpen && <SkillModal />}
      <div className={styles.techStackContainer}>
        <SkillHeader title='Skills & Stack' subtitle='' />
        <div className={styles.techStackGrid}>
          <TechStackBlock toggleOpenModal={toggleOpenModal} techList={languagesBlock} />
          <TechStackBlock toggleOpenModal={toggleOpenModal} techList={frontendBlock} />
          <TechStackBlock toggleOpenModal={toggleOpenModal} techList={backendBlock} />
          <TechStackBlock toggleOpenModal={toggleOpenModal} techList={otherBlock} />
        </div>
      </div>
    </>
  );
};

export default TechStack;
