import styles from "@/styles/Dashboard.module.css";
import Product from "./Product";

const Products = ({ products }: { products: ProductProps[] }) => {
  return (
    <div>
      <div className={styles.products}>
        {products?.length === 0 ? (
          <h2>لا توجد اي عناصر</h2>
        ) : (
          products.map((product) => {
            return <Product product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Products;
