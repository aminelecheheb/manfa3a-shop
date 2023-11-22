import styles from "@/styles/Dashboard.module.css";
import CategoryForm from "./CategoryForm";
import Categories from "./Categories";
import ProductForm from "./ProductForm";
import { getAllProducts } from "@/lib/product";
import Products from "@/components/Products";

const page = async () => {
  const { products } = await getAllProducts(false);

  return (
    <main className={styles.dashboard}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.actions}>
            <CategoryForm />
            <ProductForm />
          </div>
          <div className={styles.display}>
            <Categories />
            <Products products={products || []} />
          </div>
        </div>
      </div>
    </main>
  );
};

export const revalidate = 0;

export default page;
