import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.container}>
      <div className={styles.text}>
      <div className={styles.title}>
      Find all your 
favorite Character
      </div>
      <div className={styles.text2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </div>
      <a
            href="https://vercel.com/?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
      <div className={styles.button_green}>
See characters
      </div>
      </a>
      </div>
      <div  className={styles.wrongimg}>


      </div>
     </div>
    </main>
  );
}
