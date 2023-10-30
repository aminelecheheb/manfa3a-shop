"use client";
import { useGlobalContext } from "@/context/appContext";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";

type CategoriesType =
  | {
      id: number;
      category: string;
    }[]
  | undefined;

const ToggleNav = ({ categories }: { categories: CategoriesType }) => {
  const { state } = useGlobalContext();
  const { showNav } = state;

  return (
    <aside
      className={
        showNav ? `${styles.nav_sidebar} ${styles.show}` : styles.nav_sidebar
      }
    >
      <div className={styles.sidebar_links}>
        <Link href="/">الصفحة الرئيسية</Link>
        <Link href="/feedbacks">آراء الزبائن</Link>
        <Link href="/shop">جميع الفئات</Link>
        {categories?.map((category) => {
          return (
            <Link href={`/shop/${category.id}`}> {category.category} </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default ToggleNav;
