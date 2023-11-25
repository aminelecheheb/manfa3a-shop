"use client";
import styles from "@/styles/Layout.module.css";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/context/appContext";
import { useSession } from "next-auth/react";
import { LogoutButton } from "./auth";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const { status } = useSession();

  const { toggleShowNav } = useGlobalContext();
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.nav_flex}>
          <div className={styles.logo}>
            {/* <div>
              <h3 className={styles.logo}>منفعة شوب</h3>
              <h3>Weal Shop</h3>
            </div>
            <FaShopify className={styles.icon} /> */}
            <div className={styles.logo_container}>
              <Image src={logo} fill alt="logo" className={styles.logo_img} />
            </div>
          </div>

          <div className={styles.links}>
            <Link href="/">
              <h3 className={`${pathname === "/" && "active"}`}>
                الصفحة الرئيسية
              </h3>
            </Link>
            <Link href="/shop">
              <h3 className={`${pathname.includes("shop") && "active"}`}>
                منتجاتنا
              </h3>
            </Link>
            {/* {status !== "authenticated" ? (
              <Link href="/feedbacks">
                <h3 className={`${pathname === "/feedbacks" && "active"}`}>
                  آراء الزبائن
                </h3>
              </Link>
            ) : (
              <Link href="/dashboard">
                <h3 className={`${pathname === "/dashboard" && "active"}`}>
                  لوحة التحكم
                </h3>
              </Link>
            )} */}
            {status === "authenticated" && (
              <>
                <Link href="/dashboard">
                  <h3 className={`${pathname === "/dashboard" && "active"}`}>
                    لوحة التحكم
                  </h3>
                </Link>
                <Link href={"/dashboard/orders"}>
                  <h3 className={`${pathname.includes("orders") && "active"}`}>
                    الطلبيات
                  </h3>
                </Link>
              </>
            )}
          </div>
          {status !== "authenticated" ? (
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
          ) : (
            <LogoutButton />
          )}
          <button className={styles.toggle_btn} onClick={toggleShowNav}>
            <AiOutlineMenu className={styles.icon} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
