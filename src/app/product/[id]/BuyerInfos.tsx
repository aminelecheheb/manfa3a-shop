"use client";
import styles from "@/styles/Product.module.css";
import { useState, useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { createOrderAction } from "@/_actions";
import { useFormStatus } from "react-dom";

type AlertType = {
  showAlert: boolean;
  type: string;
  data: any;
};

const BuyerInfos = ({
  colors,
  productName,
  productPrice,
}: {
  colors: string[];
  productName: string;
  productPrice: number;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [alert, setAlert] = useState({
    showAlert: false,
    type: "",
    data: {},
  });

  const clearAlert = () => {
    setAlert({ showAlert: false, type: "", data: {} });
  };

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

    // if (typeof productId !== "number" || !productId) return;
    if (typeof productName !== "string" || !productName) return;

    if (typeof productPrice !== "number" || !productPrice) return;

    const livraison = data.get("livraison");

    if (typeof livraison !== "string" || !livraison) return;

    if (typeof quantity !== "number") return;

    const result = await createOrderAction(
      firstName,
      lastName,
      phoneNumber,
      adress,
      productName,
      productPrice,
      livraison,
      quantity,
      selectedColor
    );
    formRef.current?.reset();
    console.log(result);
    result.order
      ? setAlert({ showAlert: true, type: "success", data: result.order })
      : setAlert({
          showAlert: true,
          type: "danger",
          data: { error: result.error },
        });
  }

  if (alert.showAlert && alert.type === "success") {
    return <AlertModel alert={alert} clearAlert={clearAlert} />;
  } else {
    return (
      <div className={styles.buyer_infos_container}>
        <h2> معلومات المشتري</h2>
        <form ref={formRef} action={action} className={styles.form} id="form">
          <div className={styles.flex}>
            <input type="text" name="fName" placeholder="الاسم" required />
            <input type="text" name="lName" placeholder="اللقب" required />
          </div>
          <input type="text" name="phone" placeholder="رقم الهاتف" required />
          <input
            type="text"
            name="adress"
            placeholder="العنوان (البلدية و الولاية)"
            required
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
                required
              />
              <label htmlFor="desk">
                <h3>التوصيل لمكتب Yalidine</h3>
                <h3>400 دج</h3>
              </label>
            </div>
            <div className={styles.radio}>
              <input
                type="radio"
                id="home"
                name="livraison"
                value="home"
                required
              />
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
          <div className={styles.fixed_action}>
            <SubmitBtn />
          </div>
          {alert.showAlert && alert.type === "danger" && (
            <h3 className={styles.alert_danger}>
              حصل خلل ما, يرجى اعادة المحاولة
            </h3>
          )}
        </form>
      </div>
    );
  }
};

const AlertModel = ({
  alert,
  clearAlert,
}: {
  alert: AlertType;
  clearAlert: () => void;
}) => {
  const { data } = alert;
  console.log(data);

  return (
    <div className={styles.alert_container}>
      <h3 className={styles.alert_success}>
        تم ارسال طلبك بنجاح, سنتصل بك للتأكيد في اقرب وقت
      </h3>
      <div className={styles.alert_data}>
        <h4>معلومات الطلبية </h4>
        <p>الاسم : {data.firstName}</p>
        <p>اللقب : {data.lastName}</p>
        <p>العنوان : {data.adress}</p>
        <p>
          نوع التوصيل :{" "}
          {data.livraison === "desk" ? "مكتب التوصيل" : "باب المنزل"}
        </p>
        <p>الكمية : {data.quantity}</p>
      </div>
      <div className={styles.alert_actions}>
        <button className={styles.btn_close} onClick={clearAlert}>
          اغلاق
        </button>
      </div>
    </div>
  );
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <button disabled={pending} className={styles.btn_fixed} type="submit">
      اشتر الان
    </button>
  );
};

export default BuyerInfos;
