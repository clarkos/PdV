import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ministerio Puerta de Vida</title>
        <meta name="description" content="La puerta de tu bendici&oacute;n" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div></div>
        </div>

        <div>
          <Image
            className={styles.logo}
            src="/logo-512.png"
            alt="Logo Iglesia"
            width={512}
            height={512}
            priority
          />
        </div>
      </main>
    </>
  );
}
