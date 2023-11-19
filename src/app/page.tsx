import Slider from "@/components/swiper/Slider";
import styles from "@/styles/page.module.css";
import LivraisonImages from "@/components/LivraisonImages";

export default function Home() {
  return (
    <main>
      <Slider />
      <section className={styles.livraison_section}>
        <div className={styles.livraison_container}>
          <LivraisonImages />
        </div>
      </section>
    </main>
  );
}
