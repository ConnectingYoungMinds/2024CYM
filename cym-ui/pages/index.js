import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Connecting Young Minds</title>
        <link rel="icon" href="/cym-logo.ico" />
      </Head>

      <main>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Connecting Young Minds!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <div className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"> */}
            <div className={styles.social}>
              <a className={styles.icon} href="https://www.facebook.com/CYMresearchconference/"><img src="/Social-Media-Icon/Facebook.png"></img></a>
              <a className={styles.icon} href="https://www.instagram.com/cymottawa"><img src="/Social-Media-Icon/Instagram.png"></img></a>
              <a className={styles.icon} href="https://www.linkedin.com/in/connecting-young-minds-cym-790014283/"><img src="/Social-Media-Icon/LinkedIn.png"></img></a>
              <a className={styles.icon} href="https://twitter.com/cymottawa/"><img src="/Social-Media-Icon/Twitter.png"></img></a>
            </div>
          <p className={styles.copyright}>Copyright © CYM. All rights reserved. </p>
      </div>
    </div>
  );
}
