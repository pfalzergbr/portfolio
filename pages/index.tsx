import Head from 'next/head';
import Hero from '../components/landing/Hero';
import SocialWidget from '../components/landing/SocialWidget';
import AnimatedRoute from '../layout/AnimatedRoute';
import styles from './index.module.scss';
import { defaultSocialIcons } from '../data/socialIcons';



export default function Home({socialIcons}) {
  return (
    <AnimatedRoute>
      <div className={styles.landing}>
        <Head>
          <title>Peter Pfalzer - Portfolio</title>
        </Head>
        <Hero />
        <SocialWidget socialIcons={socialIcons}/>
      </div>
    </AnimatedRoute>
  );
}
//TODO - change the grid responsiveness to mobile first

export const getStaticProps = async (context) => {
  return {
    props: {
      socialIcons: defaultSocialIcons
    }
  }
};