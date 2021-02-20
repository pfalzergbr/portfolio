import Head from 'next/head';
import Hero from '../components/landing/Hero';
import SocialWidget from '../components/landing/SocialWidget';
import AnimatedRoute from '../layout/AnimatedRoute';
import styles from './index.module.scss';

export default function Home() {
  return (
    <AnimatedRoute>
      <div className={styles.landing}>
        <Head>
          <title>Peter Pfalzer - Portfolio</title>
        </Head>
        <Hero />
        <SocialWidget />
      </div>
    </AnimatedRoute>
  );
}
//TODO - change the grid responsiveness to mobile first
