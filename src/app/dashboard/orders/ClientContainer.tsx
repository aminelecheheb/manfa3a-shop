"use client";
import Tabs from "./Tabs";
import { useState } from "react";
import styles from "@/styles/Orders.module.css";
import Table from "./Table";

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

const ClientContainer = ({
  newOrders,
  confirmedOrders,
  recievedOrders,
  canceledOrders,
}: {
  newOrders: Orders;
  confirmedOrders: Orders;
  recievedOrders: Orders;
  canceledOrders: Orders;
}) => {
  const [activeTab, setActiveTab] = useState("new orders");
  return (
    <div className={styles.client_container}>
      <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "new orders" && <Table orders={newOrders} />}
      {activeTab === "confirmed orders" && <Table orders={confirmedOrders} />}
      {activeTab === "recieved orders" && <Table orders={recievedOrders} />}
      {activeTab === "canceled orders" && <Table orders={canceledOrders} />}
    </div>
  );
};

export default ClientContainer;
