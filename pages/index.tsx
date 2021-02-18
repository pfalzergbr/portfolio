import Head from 'next/head'
import Hero from '../components/elements/Hero'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.landing}>
      <Head>
        <title>Peter Pfalzer - Portfolio</title>
      </Head>
      <Hero/>


    </div>
  )
}
