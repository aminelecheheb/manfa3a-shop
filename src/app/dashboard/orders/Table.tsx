"use client";
import styles from "@/styles/Orders.module.css";

type Orders =
  | {
      id: number;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      adress: string;
      productId: number;
      livraison: string;
      color: string | null;
      quantity: number;
      state: string;
    }[]
  | { error: unknown };

const Table = ({ orders }: { orders: Orders }) => {
  return (
    <div className={styles.table}>
      <h1>table</h1>
    </div>
  );
};

export default Table;
