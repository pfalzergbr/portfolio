import ContactMessage from '../../components/contact/ContactMessage';
import AnimatedRoute from '../../layout/AnimatedRoute';
import styles from './index.module.scss';
export interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <AnimatedRoute className={styles.contact}>
      <ContactMessage />
    </AnimatedRoute>
  );
};

export default Contact;
