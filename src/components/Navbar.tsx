"use client";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.nav_flex}>
          <div className={styles.logo}>
            <div>
              <h2 className={styles.logo}>منفعة شوب</h2>
              <h3>Weal Shop</h3>
            </div>
            <FaShopify className={styles.icon} />
          </div>

          <div className={styles.links}>
            <Link href="/">
              <h3 className={`${pathname === "/" && "active"}`}>
                الصفحة الرئيسية
              </h3>
            </Link>
            <Link href="/shop">
              <h3 className={`${pathname === "/shop" && "active"}`}>
                جميع الفئات
              </h3>
            </Link>
            <Link href="/feedbacks">
              <h3 className={`${pathname === "/feedbacks" && "active"}`}>
                آراء الزبائن
              </h3>
            </Link>
          </div>
          <div className={styles.infos}>
            <div>
              <h3>اتصل بنا</h3>
              <p>07 76 52 12 25</p>
            </div>
            <div>
              <h3>توصيل متوفر</h3>
              <p> 58 ولاية</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
