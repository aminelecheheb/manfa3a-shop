"use client";
import { useGlobalContext } from "@/context/appContext";
import styles from "@/styles/Layout.module.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "./auth";

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
  const { status } = useSession();

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
        {status === "authenticated" && (
          <>
            <h3 className={styles.admin_links}>Admin links</h3>
            <Link
              href="/dashboard"
              className={`${pathname === "/dashboard" && styles.active_btn}`}
            >
              لوحة التحكم
            </Link>
            <Link
              href={"/dashboard/orders"}
              className={`${pathname.includes("orders") && styles.active_btn}`}
            >
              الطلبيات
            </Link>
            <LogoutButton />
          </>
        )}
      </div>
    </aside>
  );
};

export default ToggleNav;
