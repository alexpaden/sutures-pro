import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MedicalReportForm from "@/components/test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Suture's Medical Translator</title>
        <meta name="description" content="medical text for layman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by typing your doctor's medical report in the box
            below&nbsp;
          </p>
        </div>

        <MedicalReportForm />

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about the medical terms used in your report (coming
              soon...)
            </p>
          </a>
          <a className={styles.card}>
            <h2 className={inter.className}>
              Models <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about the models used to train results (coming soon...)
            </p>
          </a>
          <a className={styles.card}>
            <h2 className={inter.className}>
              Help <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Examples and more</p>
          </a>
        </div>
      </main>
    </>
  );
}
