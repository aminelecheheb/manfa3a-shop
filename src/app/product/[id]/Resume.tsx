"use client";

import React, { useState } from "react";
import styles from "@/styles/Product.module.css";
import { useGlobalContext } from "@/context/appContext";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Resume = ({ title, price }: { title: string; price: number }) => {
  const { state } = useGlobalContext();
  const { quantityGlobal, deliveryPriceGlobal } = state;
  console.log(state.deliveryPriceGlobal);

  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        isOpen
          ? styles.resume_container
          : `${styles.resume_container} ${styles.close}`
      }
    >
      <div className={styles.header}>
        <h4>ملخص الطلبية</h4>
        {isOpen ? (
          <FaAngleUp className={styles.icon_arrow} onClick={toggleOpen} />
        ) : (
          <FaAngleDown className={styles.icon_arrow} onClick={toggleOpen} />
        )}
      </div>

      <p>المنتج : {title}</p>
      <p>
        ثمن المنتج و الكمية: {price} دج {quantityGlobal}x
      </p>
      <p>
        ثمن التوصيل :{" "}
        {deliveryPriceGlobal === 0
          ? "اختر الولاية"
          : ` ${deliveryPriceGlobal} دج`}
      </p>
      <p>السعر الاجمالي : {quantityGlobal * price + deliveryPriceGlobal}</p>
    </div>
  );
};

export default Resume;
