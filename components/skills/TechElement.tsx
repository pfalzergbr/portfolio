import styles from './styles/TechElement.module.scss';
import TechIcon from './TechIcon';

export interface LanguageElementProps {
  icon: string;
  label: string;
}

const LanguageElement: React.FC<LanguageElementProps> = ({ icon, label }) => {
  return (
    <div className={styles.techElement}>
      <TechIcon icon={icon} />
      <span className={styles.tech_label}>{label}</span>
    </div>
  );
};

export default LanguageElement;
