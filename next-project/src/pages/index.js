import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/Link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NYIT Pair</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Welcome to NYIT Pair!</p>
              By Team 1!
          </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="\nyitlogo_adobe_express.svg"
            alt="Next.js Logo"
            width={180}
            height={200}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/bluepair.png"
              alt="13"
              width={160}
              height={160}
              priority
            />
          </div>
        </div>
      
        <div className={styles.grid}>
          <Link
            href="/login"
            className={styles.card}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Login <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Login here!
            </p>
          </Link>

          <Link
            href="/profile"
            className={styles.card}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Profile <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Create or edit your profile here!
            </p>
          </Link>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}