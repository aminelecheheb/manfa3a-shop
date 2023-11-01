"use client";
import styles from "@/styles/Product.module.css";
import { useState, useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { createOrderAction } from "@/_actions";

const BuyerInfos = ({
  colors,
  productId,
}: {
  colors: string[];
  productId: number;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const firstName = data.get("fName");
    if (typeof firstName !== "string" || !firstName) return;

    const lastName = data.get("lName");
    if (typeof lastName !== "string" || !lastName) return;

    const phoneNumber = data.get("phone");
    if (typeof phoneNumber !== "string" || !phoneNumber) return;

    const adress = data.get("adress");
    if (typeof adress !== "string" || !adress) return;

    if (typeof productId !== "number" || !productId) return;

    const livraison = data.get("livraison");
    console.log(`livraison : ${livraison}`);
    if (typeof livraison !== "string" || !livraison) return;

    if (typeof quantity !== "number") return;

    const order = await createOrderAction(
      firstName,
      lastName,
      phoneNumber,
      adress,
      productId,
      livraison,
      quantity,
      selectedColor
    );
    formRef.current?.reset();
    console.log(order);
  }

  return (
    <div className={styles.buyer_infos_container}>
      <h2> معلومات المشتري</h2>
      <form ref={formRef} action={action} className={styles.form}>
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
            <select
              className={styles.color}
              name="color"
              id="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.currentTarget.value)}
            >
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
            <div onClick={decreaseQuantity}>
              <span>
                <AiOutlineMinus />
              </span>
            </div>

            <div>
              <span className={styles.number}>{quantity}</span>
            </div>
            <div onClick={increaseQuantity}>
              <span>
                <AiOutlinePlus />
              </span>
            </div>
          </div>
        </div>
        <button className={styles.action_btn} type="submit">
          اشتر الان
        </button>
      </form>
    </div>
  );
};

export default BuyerInfos;
