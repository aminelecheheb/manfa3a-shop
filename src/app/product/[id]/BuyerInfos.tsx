"use client";
import styles from "@/styles/Product.module.css";
import { useState } from "react";

const BuyerInfos = ({ colors }: { colors: string[] }) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <div className={styles.buyer_infos_container}>
      <h2> معلومات المشتري</h2>
      <form action="" className={styles.form}>
        <div className={styles.flex}>
          <input type="text" name="fName" placeholder="الاسم" />
          <input type="text" name="lName" placeholder="اللقب" />
        </div>
        <input type="text" name="phone" placeholder="رقم الهاتف" />
        <input
          type="text"
          name="adress"
          placeholder="العنوان (البلدية و الولاية)"
        />
        <h2>نوع التوصيل</h2>
        <div className={styles.livraison_container}>
          <div className={styles.radio}>
            <input
              type="radio"
              id="desk"
              name="livraison"
              value="desk"
              defaultChecked
            />
            <label htmlFor="desk">
              <h3>التوصيل لمكتب Yalidine</h3>
              <h3>400 دج</h3>
            </label>
          </div>
          <div className={styles.radio}>
            <input type="radio" id="home" name="livraison" value="home" />
            <label htmlFor="home">
              <h3>التوصيل للمنزل</h3>
              <h3>800 دج</h3>
            </label>
          </div>
        </div>
        <h2>اختر اللون و الكمية</h2>
        <div className={styles.req_details}>
          {colors.length >= 1 && (
            <select className={styles.color} name="color" id="color">
              {colors.map((color) => {
                return (
                  <option key={colors.indexOf(color)} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          )}
          <div className={styles.quantity}>
            <div>
              <span onClick={decreaseQuantity}>-</span>
            </div>

            <div>
              <span>{quantity}</span>
            </div>
            <div>
              <span onClick={increaseQuantity}>+</span>
            </div>
          </div>
        </div>
        <button className={styles.action_btn}>اشتر الان</button>
      </form>
    </div>
  );
};

export default BuyerInfos;
