import ContactLinks from './ContactLinks';
import styles from './styles/Contacts.module.scss';

export interface ContactMessageProps {}

const ContactMessage: React.SFC<ContactMessageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact</h1>
      </div>
      <div className={styles.message}>
        <p className={styles.contactMessage}>
          Thank you for checking out my work!
        </p>
        <p className={styles.contactMessage}>
          If you like what you see, please do get in touch. I am open to web
          developer positions, collaboration, projects, or just having a good
          chat.{' '}
        </p>
        <p className={styles.contactMessage}>
          You can E-mail me directly on{' '}
          <a className={styles.emailLink} href='mailto:pfalzer@gmail.com'>
            pfalzer@gmail.com
          </a>
          . I look forward to hearing from you!
        </p>
      </div>
      <ContactLinks />
    </div>
  );
};

export default ContactMessage;
