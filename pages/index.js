import Head from 'next/head';
import styles from '../styles/Home.module.css';
import play from '/playground/main.ts';

export default function Home() {
  return (
    <div className={styles.container}>
      <p>{play()}</p>
    </div>
  );
}
