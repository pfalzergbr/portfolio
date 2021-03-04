import Head from 'next/head';
import ContactMessage from '../../components/contact/ContactMessage';
import AnimatedRoute from '../../layout/AnimatedRoute';
import styles from './index.module.scss';
export interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <AnimatedRoute className={styles.contact}>
      <Head>
        <title>Gabor Pfalzer - Skills</title>
        <meta
          name='description'
          content='Full Stack Web Developer portfolio site of Gabor Pfalzer'
        ></meta>
      </Head>
      <ContactMessage />
    </AnimatedRoute>
  );
};

export default Contact;
