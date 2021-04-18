import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../layout/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Gabor Pfalzer - Portfolio</title>
        <meta
          name='title'
          property='og:title'
          content='Gabor Pfalzer - Portfolio'
        />
        <meta name='type' property='og:type' content='Website' />
        <meta
          name='image'
          property='og:image'
          content='https://res.cloudinary.com/pfalzer-dev/image/upload/v1618154691/portfolio-min_v4oztd.png'
        />
        <meta
          name='description'
          property='og:description'
          content='Full Stack Web Development Portfolio, London'
        />
        <meta name='author' content='Gabor Pfalzer' />
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          {/* <Component {...pageProps} key={router.route}/> */}
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
