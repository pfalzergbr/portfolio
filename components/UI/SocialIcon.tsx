import styles from './styles/SocialIcon.module.scss';

export interface SocialIconProps {
  logo: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ logo }) => {
  return (
    <div>
      <object
        aria-label={`logo of ${logo} `}
        className={styles.socialIcon}
        type='image/svg+xml'
        data={`/social/social-${logo}.svg`}
      ></object>
    </div>
  );
};

export default SocialIcon;
