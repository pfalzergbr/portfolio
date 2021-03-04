import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import TechStackBlock from './TechStackBlock';
import styles from './styles/TechStack.module.scss';
import SkillHeader from './SkillHeader';
import { Tech } from '../../data/techData';
import TechModal from './TechModal';

export interface TechStackProps {
  techStack: {
    languagesBlock: Tech[];
    frontendBlock: Tech[];
    backendBlock: Tech[];
    databaseBlock: Tech[];
    otherBlock: Tech[];
  };
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  const { languagesBlock, frontendBlock, backendBlock, databaseBlock, otherBlock } = techStack;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const changeModalContent = (content: Tech) => {
    setModalContent(content)
  }

  const toggleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      {isModalOpen && modalContent && (
        <div className={styles.overlay} onClick={toggleOpenModal} key='menu'></div>
      )}
      <AnimatePresence>
      {isModalOpen && modalContent && <TechModal toggleOpenModal={toggleOpenModal} techData={modalContent}/>}
      </AnimatePresence>
      <div className={styles.techStackContainer}>
        <SkillHeader title='Skills & Stack' subtitle='Click on technologies to see my particular experience' />
        <div className={styles.techStackGrid}>
          <TechStackBlock toggleOpenModal={toggleOpenModal} changeModalContent={changeModalContent} techList={languagesBlock} />
          <TechStackBlock toggleOpenModal={toggleOpenModal} changeModalContent={changeModalContent} techList={frontendBlock} />
          <TechStackBlock toggleOpenModal={toggleOpenModal} changeModalContent={changeModalContent} techList={backendBlock} />
          <TechStackBlock toggleOpenModal={toggleOpenModal} changeModalContent={changeModalContent} techList={databaseBlock} />
          <TechStackBlock toggleOpenModal={toggleOpenModal} changeModalContent={changeModalContent} techList={otherBlock} />
        </div>
      </div>
    </>
  );
};

export default TechStack;
