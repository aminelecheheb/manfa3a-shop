import { getCategories } from "@/lib/category";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";

const Sidebar = async () => {
  const { categories } = await getCategories();
  return (
    <div className={styles.sidebar}>
      <Link href="/shop">
        <h3>جميع الفئات</h3>
      </Link>
      {categories?.map((category) => {
        return (
          <Link key={category.id} href={`/shop/${category.id}`}>
            <h3> {category.category} </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
