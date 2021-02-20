import '../styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        {/* <Component {...pageProps} key={router.route}/> */}
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
