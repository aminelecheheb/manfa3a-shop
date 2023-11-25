import Slider from "@/components/swiper/Slider";
import styles from "@/styles/page.module.css";
import LivraisonImages from "@/components/LivraisonImages";
import { getAllProducts } from "@/lib/product";
import HomeSlider from "@/components/HomeSlider";

export default async function Home() {
  const { products } = await getAllProducts(true);
  return (
    <>
      <main>
        <Slider />
        {products && <HomeSlider products={products} />}
        <section className={styles.livraison_section}>
          <div className={styles.livraison_container}>
            <LivraisonImages />
          </div>
        </section>
      </main>
    </>
  );
}
