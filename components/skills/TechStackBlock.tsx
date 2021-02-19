import styles from './styles/TechStackBlock.module.scss';
import { Tech } from './TechStack';
import TechElement from './TechElement';

export interface TechStackBlockProps {
  techList: Tech[];
}

const TechStackBlock: React.FC<TechStackBlockProps> = ({ techList }) => {
  return (
    <div className={styles.techStack_block}>
      {techList.map(({ icon, label }) => (
        <TechElement icon={icon} label={label} />
      ))}
    </div>
  );
};

export default TechStackBlock;
