"use client";
import Tabs from "./Tabs";
import { useState } from "react";
import styles from "@/styles/Orders.module.css";
import Table from "./Table";

type Orders =
  | {
      id: number;
      firstName: string;
      // lastName: string;
      phoneNumber: string;
      adress: string;
      productName: string;
      productPrice: number;
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
  onDeleveryOrders,
  returnedOrders,
}: {
  newOrders: Orders;
  confirmedOrders: Orders;
  recievedOrders: Orders;
  canceledOrders: Orders;
  onDeleveryOrders: Orders;
  returnedOrders: Orders;
}) => {
  const [activeTab, setActiveTab] = useState("new orders");

  let newLen = 0;
  let confirmedLen = 0;
  let recievedLen = 0;
  let canceledLen = 0;
  let returnedLen = 0;
  let onDeleveryLen = 0;

  Array.isArray(newOrders) && (newLen = newOrders.length);
  Array.isArray(confirmedOrders) && (confirmedLen = confirmedOrders.length);
  Array.isArray(recievedOrders) && (recievedLen = recievedOrders.length);
  Array.isArray(canceledOrders) && (canceledLen = canceledOrders.length);
  Array.isArray(returnedOrders) && (returnedLen = returnedOrders.length);
  Array.isArray(onDeleveryOrders) && (onDeleveryLen = onDeleveryOrders.length);

  return (
    <div className={styles.client_container}>
      <Tabs
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        newLen={newLen}
        confirmedLen={confirmedLen}
        recievedLen={recievedLen}
        canceledLen={canceledLen}
        returnedLen={returnedLen}
        onDeleveryLen={onDeleveryLen}
      />
      {activeTab === "new orders" && (
        <Table activeTab={activeTab} orders={newOrders} />
      )}
      {activeTab === "confirmed orders" && (
        <Table activeTab={activeTab} orders={confirmedOrders} />
      )}
      {activeTab === "recieved orders" && (
        <Table activeTab={activeTab} orders={recievedOrders} />
      )}
      {activeTab === "canceled orders" && (
        <Table activeTab={activeTab} orders={canceledOrders} />
      )}
      {activeTab === "on delevery" && (
        <Table activeTab={activeTab} orders={onDeleveryOrders} />
      )}
      {activeTab === "returned orders" && (
        <Table activeTab={activeTab} orders={returnedOrders} />
      )}
    </div>
  );
};

export default ClientContainer;
