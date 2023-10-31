"use client";
import styles from "@/styles/Product.module.css";

const BuyerInfos = () => {
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
      </form>
    </div>
  );
};

export default BuyerInfos;
