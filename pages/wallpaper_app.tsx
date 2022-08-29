import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import type { NextPage } from 'next'
import { IoArrowBackOutline } from 'react-icons/io5'
import Head from 'next/head'

const WallpaperApp: NextPage = () => {
    const router = useRouter();
    const id = router.query;

    return (

        <div className={styles.container}>
            <Head>
                <title>Wallpaper App</title>
                <meta name="description" content="baran zengeralp flutter wallpaper app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main className={styles.main} style={{ justifyContent: 'start' }}>
                <button className={styles.back} onClick={() => router.push('/')}> <IoArrowBackOutline size={60} />
                </button>
                <p className={styles.description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam maiores, quidem pariatur provident repellat facere ea aliquid, nulla, labore beatae aut eum ducimus accusantium? Quaerat magnam dignissimos corporis magni ullam?

                </p>
            </main>
        </div>
    )
}

export default WallpaperApp;