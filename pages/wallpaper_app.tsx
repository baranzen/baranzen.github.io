import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
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
                <meta
                    name="description"
                    content="baran zengeralp flutter wallpaper app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main} style={{ justifyContent: "start" }}>
                <button className={styles.back} onClick={() => router.push("/")}>
                    {" "}
                    <IoArrowBackOutline size={35} />
                </button>
                <p className={styles.description} style={{ fontSize: 20 }}>
                    this app  is  wallpaper app made with Flutter with Dart and you can download wallpaper, search whatever you want and you can see the wallpaper in full screen, like your favorite wallpaper and you can see your favorite wallpaper in favorite page.

                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginTop: '4rem' }}>

                        <div>
                            Play Store:
                            <Link href={'https://play.google.com/store/apps/details?id=com.baranzengeralp'}>
                                https://play.google.com/store/apps/details?id=com.baranzengeralp
                            </Link>
                        </div>
                        <div>
                            Github Source Code:  <Link href={'https://github.com/baranzen/wallpaper_app'}>
                                https://github.com/baranzen/wallpaper_app
                            </Link>
                        </div>
                    </div>
                </p>

            </main>
        </div>
    );
}

export default WallpaperApp;