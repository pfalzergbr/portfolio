import styles from './styles/Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_text}><span className={styles.footer_text_highlight}>Gabor Peter Pfalzer</span>, 2021</p>
    </footer>
  );
};

export default Footer;
