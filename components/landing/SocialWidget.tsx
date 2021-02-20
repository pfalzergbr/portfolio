import { motion } from 'framer-motion';
import SocialIcon from './SocialIcon';
import styles from './styles/SocialWidget.module.scss';

const SocialWidget = ({ socialIcons = [] }) => {
  return (
    <motion.div className={styles.socialWidget}>
      {socialIcons.map((icon, index) => (
        <SocialIcon logo={icon.logo} url={icon.url} key={index} />
      ))}
    </motion.div>
  );
};

export default SocialWidget;
