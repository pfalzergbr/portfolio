import styles from './styles/TechStack.module.scss';

export interface TechIconProps {
  icon: string;
}

const TechIcon: React.FC<TechIconProps> = ({icon}) => {
  return (
    <div className={styles.techIconContainer}>
      <svg className={styles.techIcon} focusable={true}>
        <use href={`/techLogos/sprite.svg#icon-${icon}`}></use>
      </svg>
    </div>
  );
};

export default TechIcon;
