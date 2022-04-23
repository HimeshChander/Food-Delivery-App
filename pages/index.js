import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizz Restaurant SRM</title>
        <meta name="description" content="Best Pizza Shop in the campus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home page
    </div>
  )
}
