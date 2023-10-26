"use client";
import { useGlobalContext } from "@/context/appContext";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";

const ToggleNav = () => {
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
        <Link href="/shop"> أدوات كهرومنزلية</Link>
        <Link href="/shop">إلكترونيات</Link>
        <Link href="/shop"> عتاد الرياضة</Link>
        <Link href="/shop">ملابس رجالية</Link>
        <Link href="/shop"> عتاد التخييم</Link>
        <Link href="/shop"> أكسسوارات</Link>
      </div>
    </aside>
  );
};

export default ToggleNav;
