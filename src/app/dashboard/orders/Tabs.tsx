"use client";
import styles from "@/styles/Orders.module.css";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const Tabs = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
}) => {
  return (
    <div className={styles.tabs}>
      <button
        onClick={() => setActiveTab("new orders")}
        className={
          activeTab === "new orders"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        طلبيات جارية
      </button>
      <button
        onClick={() => setActiveTab("confirmed orders")}
        className={
          activeTab === "confirmed orders"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        طلبيات مؤكدة
      </button>
      <button
        onClick={() => setActiveTab("recieved orders")}
        className={
          activeTab === "recieved orders"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        طلبيات مستلمة
      </button>
      <button
        onClick={() => setActiveTab("canceled orders")}
        className={
          activeTab === "canceled orders"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        طلبيات ملغات
      </button>
    </div>
  );
};

export default Tabs;
