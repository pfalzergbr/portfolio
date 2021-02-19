import styles from './styles/SocialIcon.module.scss';

export interface SocialIconProps {
  logo: string;
  url: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ logo, url }) => {
  return (
    <a href={url} className={styles.socialIcon_container}>
      <svg className={styles.socialIcon} focusable={true}>
        <use href={`/social/sprite.svg#social-${logo}`}></use>
      </svg>
    </a>
  );
};

export default SocialIcon;
