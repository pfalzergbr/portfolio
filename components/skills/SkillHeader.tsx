import styles from './styles/SkillHeader.module.scss';

export interface SkillHeaderProps {
  title: string;
  subtitle: string;
}

const SkillHeader: React.FC<SkillHeaderProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </div>
  );
};

export default SkillHeader;
