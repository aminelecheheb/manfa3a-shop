import { getProductByCategory } from "@/lib/product";
import Sidebar from "@/components/Sidebar";
import Products from "@/components/Products";
import styles from "@/styles/Shop.module.css";

const page = async ({ params }: { params: { category: string } }) => {
  const { products } = await getProductByCategory(params.category, true);

  return (
    <main className={styles.shop_container}>
      <Sidebar />
      <div className={styles.shop}>
        <div>
          <Products products={products || []} />
        </div>
      </div>
    </main>
  );
};

export default page;
