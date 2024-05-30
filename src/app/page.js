import Image from "next/image";
import styles from "./page.module.css";
import HomeComponent from "@/component/home";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeComponent />
    </main>
  );
}
