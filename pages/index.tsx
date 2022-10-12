
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
        <br />
        <div className={styles.description} style={{ fontSize: '1.2rem' }}>
          Mobile Developer | Flutter{/*  <MdFlutterDash style={{ fontSize: '45px', marginLeft: '3px', marginRight: '3px' }} />  */} | Swift {/* <SiSwift style={{ fontSize: '35px', marginLeft: '5px', marginRight: '5px' }} /> */} | <Link href={'https://evdeyap.net/'}>edeyap.net</Link>
        </div>

        {/*     <div style={{ border: '1px solid  #222', padding: '12px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className={styles.description} style={{fontSize:'1.2rem'}} >email me</span>
          <MdMail style={{ fontSize: '50' }} />
        </div> */}
        <div className={styles.social}>
          <Link href={'https://github.com/baranzen'} >
            <a target='_blank'>
              <FaGithub size={50} />
            </a>
          </Link>
          <Link href={'mailto:info@baranben.com'}>
            <a target='_blank'>
              <MdMail size={50} />
            </a>
          </Link>
          <Link href={'https://www.linkedin.com/in/baranzengeralp/'}>
            <a target='_blank'>
              <FaLinkedin size={50} />
            </a>
          </Link>
          <Link href={'https://discordapp.com/users/334816329259548676'}>
            <a target='_blank'>
              <FaDiscord size={50} />
            </a>
          </Link >
          <Link href={'https://twitter.com/dev_baran'}>
            <a target='_blank'>
              <FaTwitter size={50} />
            </a>
          </Link>

        </div>

        <p><code style={{ fontSize: '24px' }} className={styles.code}>info@baranben.com</code> </p>
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
