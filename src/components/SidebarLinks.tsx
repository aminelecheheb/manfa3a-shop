"use client";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Category = {
  id: number;
  category: string;
};

const SidebarLinks = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();

  return (
    <div className={styles.sidebar}>
      <Link href="/shop">
        <h3 className={`${pathname === "/shop" && styles.active_btn}`}>
          جميع الفئات
        </h3>
      </Link>
      {categories?.map((category) => {
        return (
          <Link key={category.id} href={`/shop/${category.id}`}>
            <h3
              className={`${
                pathname === `/shop/${category.id}` && styles.active_btn
              }`}
            >
              {" "}
              {category.category}{" "}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
