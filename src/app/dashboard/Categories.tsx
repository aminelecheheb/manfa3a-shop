import { getCategories } from "@/lib/category";
import styles from "@/styles/Dashboard.module.css";
import Category from "./Category";

const Categories = async () => {
  const categories = await getCategories();
  // console.log(categories);

  return (
    <div className={styles.categories_container}>
      <h2>Categories</h2>
      <div className={styles.categories}>
        {categories.categories?.map((category) => {
          return <Category key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
