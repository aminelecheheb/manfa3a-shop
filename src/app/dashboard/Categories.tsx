import { getCategories } from "@/lib/category";
import styles from "@/styles/Dashboard.module.css";
import Category from "./Category";

const Categories = async () => {
  const { categories } = await getCategories();

  return (
    <div className={styles.categories_container}>
      <h2>Categories</h2>
      <div className={styles.categories}>
        {categories ? (
          categories?.map((category) => {
            return <Category key={category.id} category={category} />;
          })
        ) : (
          <h2>something went wrong</h2>
        )}
      </div>
    </div>
  );
};

export default Categories;
