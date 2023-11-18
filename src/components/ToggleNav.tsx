"use client";
import { useGlobalContext } from "@/context/appContext";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type CategoriesType =
  | {
      id: number;
      category: string;
    }[]
  | undefined;

const ToggleNav = ({ categories }: { categories: CategoriesType }) => {
  const { state } = useGlobalContext();
  const { showNav } = state;
  const pathname = usePathname();
  console.log(pathname);

  return (
    <aside
      className={
        showNav ? `${styles.nav_sidebar} ${styles.show}` : styles.nav_sidebar
      }
    >
      <div className={styles.sidebar_links}>
        <Link className={`${pathname === "/" && "active_link"}`} href="/">
          الصفحة الرئيسية
        </Link>
        <Link
          className={`${pathname === "/shop" && "active_link"}`}
          href="/shop"
        >
          جميع الفئات
        </Link>
        {categories?.map((category) => {
          return (
            <Link
              className={`${
                pathname === `/shop/${category.id}` && "active_link"
              }`}
              key={category.id}
              href={`/shop/${category.id}`}
            >
              {category.category}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default ToggleNav;
