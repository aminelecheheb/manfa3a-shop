import Sidebar from "@/components/Sidebar";
import { getAllProducts } from "@/lib/product";
import styles from "@/styles/Shop.module.css";
import Products from "@/components/Products";

const page = async () => {
  const { products } = await getAllProducts(true);
  console.log(products);

  return (
    <main className={styles.shop_container}>
      <Sidebar />
      <div className={styles.shop}>
        <h1>جميع الفئات</h1>
        <div>
          <Products products={products || []} />
        </div>
      </div>
    </main>
  );
};

export default page;
