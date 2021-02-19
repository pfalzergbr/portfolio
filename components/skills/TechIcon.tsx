import styles from './styles/TechIcon.module.scss';

export interface TechIconProps {
  icon: string;
}

const TechIcon: React.FC<TechIconProps> = ({icon}) => {
  return (
    <div className={styles.techIcon_container}>
      <svg className={styles.techIcon} focusable={true}>
        <use href={`/techLogos/sprite.svg#icon-${icon}`}></use>
      </svg>
    </div>
  );
};

export default TechIcon;
