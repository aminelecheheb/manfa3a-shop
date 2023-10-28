import styles from "@/styles/Dashboard.module.css";
import Product from "./Product";

const Products = ({ products }: { products: ProductProps[] }) => {
  return (
    <div>
      <h2>Unpublished products</h2>
      <div className={styles.products}>
        {products?.length === 0 ? (
          <h2>No items to display</h2>
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
