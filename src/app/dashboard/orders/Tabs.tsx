"use client";
import styles from "@/styles/Orders.module.css";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const Tabs = ({
  setActiveTab,
  activeTab,
  newLen,
  confirmedLen,
  recievedLen,
  canceledLen,
  returnedLen,
  onDeleveryLen,
}: {
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
  newLen: number;
  confirmedLen: number;
  recievedLen: number;
  canceledLen: number;
  returnedLen: number;
  onDeleveryLen: number;
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
        طلبيات جارية ({newLen})
      </button>
      <button
        onClick={() => setActiveTab("confirmed orders")}
        className={
          activeTab === "confirmed orders"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        طلبيات مؤكدة ({confirmedLen})
      </button>
      <button
        onClick={() => setActiveTab("on delevery")}
        className={
          activeTab === "on delevery"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        قيد التوصيل ({onDeleveryLen})
      </button>
      <button
        onClick={() => setActiveTab("recieved orders")}
        className={
          activeTab === "recieved orders"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        طلبيات مستلمة ({recievedLen})
      </button>
      <button
        onClick={() => setActiveTab("returned orders")}
        className={
          activeTab === "returned orders"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        طلبيات تم ارجاعها ({returnedLen})
      </button>
      <button
        onClick={() => setActiveTab("canceled orders")}
        className={
          activeTab === "canceled orders"
            ? `${styles.tab} ${styles.active}`
            : styles.tab
        }
      >
        طلبيات ملغات ({canceledLen})
      </button>
    </div>
  );
};

export default Tabs;
