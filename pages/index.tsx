import Head from 'next/head'
import Hero from '../components/elements/Hero'
import SocialWidget from '../components/elements/SocialWidget'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.landing}>
      <Head>
        <title>Peter Pfalzer - Portfolio</title>
      </Head>
      <Hero/>
      <SocialWidget />


    </div>
  )
}
