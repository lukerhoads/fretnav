import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.lander}>
        <div className={styles.lander_text}>
          <p className={styles.description}>
            Explore and master the fretboard with ease.
          </p>
          <a href="/app">
            <button>Start Navigating</button>
          </a>
        </div>
        <div className={styles.lander_content}></div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.feature_text}>
            <p>Navigator</p>
            <p>
              Find your way around the fretboard with ease using our free
              Navigator.
            </p>
            <a href="/app?tab=navigator">
              <button>Check it Out</button>
            </a>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_text}>
            <p>Song Explorer</p>
            <p>Learn a song quicker and with a fundamental base.</p>
            <a href="/app?tab=songs">
              <button>Check it Out</button>
            </a>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.feature_text}>
            <p>Lessons</p>
            <p>Learn fundamental concepts with ease.</p>
            <a href="/app?tab=lessons">
              <button>Check it Out</button>
            </a>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        &copy; 2024 FretNav. All rights reserved.
      </footer>
    </main>
  );
}
