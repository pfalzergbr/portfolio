import Link from 'next/link';
import styles from './styles/Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.hero_header_1}>
          Hello, I`m{' '}
          <span className={styles.hero_header_1_highlight}>Gabor Pfalzer</span>
        </h1>
        <h2 className={styles.hero_header_3}>
          I am a Full Stack Web Developer based in London.{' '}
          Check out my work to see what I can do for you.{' '}
        </h2>
        <h2 className={styles.hero_header_3}>
        </h2>
      </div>
      <div className='buttonContainer'>
        <Link href='/projects'>
          <a className={styles.hero_cta}>View Projects</a>
        </Link>
      </div>
    </main>
  );
};

export default Hero;
