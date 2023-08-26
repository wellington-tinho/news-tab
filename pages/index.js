import Head from "next/head";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News Tab | Construção</title>
      </Head>
      <div className={styles.body}>
        <main>
          <h1> News Tab </h1>
          <span>No momento este projeto esta em construção.</span>
          <span>Novas atualizações são realizadas aos finais de semana.</span>
        </main>
      </div>
    </div>
  );
}
