import SocialIcon from '../landing/SocialIcon';
import styles from './styles/Contacts.module.scss';

const ContactLinks: React.FC = () => {
  return (
    <div className={styles.contactLinks}>
      <div className={styles.contactContainer}>
        <SocialIcon logo='linkedin' url='' />
        <p className={styles.contactText}>Connect on LinkedIn</p>
      </div>
      <div className={styles.contactContainer}>
        <SocialIcon logo='twitter' url='' />
        <p className={styles.contactText}>Follow me on Twitter</p>
      </div>
      <div className={styles.contactContainer}>
        <SocialIcon logo='github' url='' />
        <p className={styles.contactText}>Check out my Github</p>
      </div>
    </div>
  );
};

export default ContactLinks;
