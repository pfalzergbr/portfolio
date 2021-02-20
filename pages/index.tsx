import { GetStaticProps } from 'next';
import Head from 'next/head';
import Hero from '../components/landing/Hero';
import SocialWidget from '../components/landing/SocialWidget';
import AnimatedRoute from '../layout/AnimatedRoute';
import styles from './index.module.scss';
import { defaultSocialIcons } from '../data/socialIcons';

export default function Home({ socialIcons }) {
  return (
    <AnimatedRoute className={styles.landing}>
      <>
        <Head>
          <title>Gabor Pfalzer - Home</title>
          <meta name="description" content="Full Stack Web Developer portfolio site of Gabor Pfalzer" ></meta>
        </Head>
        <Hero />
        <SocialWidget socialIcons={socialIcons} />
      </>
    </AnimatedRoute>
  );
}
//TODO - change the grid responsiveness to mobile first

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      socialIcons: defaultSocialIcons,
    },
  };
};
