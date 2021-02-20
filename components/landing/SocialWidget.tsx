import SocialIcon from './SocialIcon';
import styles from './styles/SocialWidget.module.scss';




const SocialWidget = ({socialIcons = []}) => {
  return (
    <div className={styles.socialWidget}>
      {socialIcons.map((icon, index) => (
        <SocialIcon logo={icon.logo} url={icon.url} key={index} />
      ))}
    </div>
  );
};





export default SocialWidget;
