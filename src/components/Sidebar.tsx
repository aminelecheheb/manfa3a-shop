import { getCategories } from "@/lib/category";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";
import SidebarLinks from "./SidebarLinks";

const Sidebar = async () => {
  const { categories } = await getCategories();
  if (categories) {
    return <SidebarLinks categories={categories} />;
  } else {
    return (
      <div className={styles.sidebar}>
        <Link href="/shop">
          <h3>جميع الفئات</h3>
        </Link>
      </div>
    );
  }
};

export default Sidebar;
