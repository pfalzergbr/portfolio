import styles from './styles/Contacts.module.scss';

const ContactLinks: React.FC = () => {
  return (
    <div className={styles.contactLinks}>
      <a className={styles.contactLink} href='https://www.linkedin.com/in/gabor-peter-pfalzer-10552224/'>
        <div className={styles.contactContainer}>
          <svg className={styles.socialIcon} focusable={true}>
            <use href={`/social/sprite.svg#social-linkedin`}></use>
          </svg>
          <p className={styles.contactText}>Connect on LinkedIn</p>
        </div>
      </a>
      <a className={styles.contactLink} href='https://twitter.com/GaborPfalzer'>
        <div className={styles.contactContainer}>
          <svg className={styles.socialIcon} focusable={true}>
            <use href={`/social/sprite.svg#social-twitter`}></use>
          </svg>
          <p className={styles.contactText}>Follow me on Twitter</p>
        </div>
      </a>
      <a className={styles.contactLink} href='https://github.com/pfalzergbr'>
        <div className={styles.contactContainer}>
          <svg className={styles.socialIcon} focusable={true}>
            <use href={`/social/sprite.svg#social-github`}></use>
          </svg>
          <p className={styles.contactText}>Check out my Github</p>
        </div>
      </a>
    </div>
  );
};

export default ContactLinks;
