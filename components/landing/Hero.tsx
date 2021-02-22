import Link from 'next/link';
import styles from './styles/Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroHeader}>
          Hello, I`m{' '}
          <span className={styles.heroHeaderHighlight}>Gabor Pfalzer</span>
        </h1>
        <h2 className={styles.heroSubheader}>
          I am a Full Stack Web Developer based in London.{' '}
          Check out my work to see what I can do for you.{' '}
        </h2>
        <h2 className={styles.heroSubheader}>
        </h2>
      </div>
      <div className='buttonContainer'>
        <Link href='/projects'>
          <a className={styles.heroCta}>View Projects</a>
        </Link>
      </div>
    </main>
  );
};

export default Hero;
