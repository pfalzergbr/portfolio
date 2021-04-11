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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Gabor Pfalzer - Portfolio</title>
        <meta name='description' content='Full Stack Web Development Portfolio, London' />
        <meta name='title' property='og:title' content='Gabor Pfalzer - Portfolio' />
        <meta property='og:type' content='Websote' />
        <meta name='og:image' property='og:image' content='https://res.cloudinary.com/pfalzer-dev/image/upload/v1618154691/portfolio-min_v4oztd.png' />
        <meta name='og:description' property='og:description' content='Full Stack Web Development Portfolio, London' />
        <meta name='author' content='Gabor Pfalzer' />
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
