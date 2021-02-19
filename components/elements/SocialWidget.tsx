import SocialIcon from '../UI/SocialIcon';
import styles from './styles/SocialWidget.module.scss';

const SocialWidget: React.FC = () => {
  return (
    <div className={styles.socialWidget}>
      <SocialIcon logo='github' url='https://github.com/pfalzergbr' />
      <SocialIcon logo='linkedin' url='https://www.linkedin.com/in/gabor-peter-pfalzer-10552224/'/>
      <SocialIcon logo='twitter' url='https://twitter.com/GaborPfalzer'/>
    </div>
  );
};

export default SocialWidget;
