import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peter Pfalzer - Portfolio</title>
      </Head>

      <main className={styles.main}>
        HomePage
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}