
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FaDiscord, FaLinkedin, FaGithub, FaTwitter, FaHandSpock } from 'react-icons/fa'
import { SiSwift } from 'react-icons/si'
import { MdMail, MdFlutterDash } from 'react-icons/md'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baran Zengeralp</title>
        <meta name="description" content="baran zengeralp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ textAlign: 'center' }}>
          <img className={styles.baran} src="/baran_zengeralp.png" alt="baran" />
        </div>
        <br />
        <h1 className={styles.title}>Baran Zengeralp</h1>

        <div className={styles.text}>
          Mobile Developer | Flutter{/*  <MdFlutterDash style={{ fontSize: '45px', marginLeft: '3px', marginRight: '3px' }} />  */} | Swift {/* <SiSwift style={{ fontSize: '35px', marginLeft: '5px', marginRight: '5px' }} /> */} | evdeyap.net
        </div>
        <br />
        {/*     <div style={{ border: '1px solid  #222', padding: '12px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className={styles.description} style={{fontSize:'1.2rem'}} >email me</span>
          <MdMail style={{ fontSize: '50' }} />
        </div> */}
        <div className={styles.social}>
          <a>
            <FaGithub />
          </a>
          <a>
            <MdMail />
          </a>
          <a>
            <FaLinkedin />
          </a>
          <a>
            <FaDiscord />
          </a>

          <a>
            <FaTwitter />
          </a>

        </div>
        <br />
        <p className={styles.description}>
          Hi there, <code className={styles.code}>Baran</code> is Here!   <FaHandSpock />

        </p>
        <br />
        {/* //! PROJECTS */}
        <code style={{ fontSize: '24px' }} className={styles.code}>projects</code>
        <br />

        <div className={styles.grid}>

          <Link href='/wallpaper_app'>
            <a className={styles.card}>
              <h2>Wallpaper App &rarr;</h2>
              <p>Flutter Wallpaper App allows to you set your dream wallpaper.</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

        Powered by{" ® "}
        {/*   <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        Baran Zengeralp

      </footer>
    </div>
  );
}

export default Home
