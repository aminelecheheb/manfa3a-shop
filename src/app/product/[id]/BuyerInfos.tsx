"use client";
import styles from "@/styles/Product.module.css";
import { useState, useRef, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { createOrderAction } from "@/_actions";
import { useFormStatus } from "react-dom";

import { wilayas, communes, getCommunes, prices } from "@/wilaya";
import { useGlobalContext } from "@/context/appContext";

type Prices = {
  [key: string]: number;
};

const myPrices: Prices = prices;

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
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [selectedCommune, setSelectedCommune] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [allCommunes, setAllCommunes] = useState(communes);
  // const [pricesf, setPricesf] = useState(prices);

  const [pending, setPending] = useState(false);

  const [alert, setAlert] = useState({
    showAlert: false,
    type: "",
    data: {},
  });

  const clearAlert = () => {
    setAlert({ showAlert: false, type: "", data: {} });
  };

  // console.log(colors);

  useEffect(() => {
    alert.showAlert &&
      alert.type === "wilaya" &&
      setTimeout(() => {
        clearAlert();
      }, 3000);
  }, [alert.showAlert, alert.type]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  useEffect(() => {
    getCommunes(selectedWilaya);
    setAllCommunes(communes);
  }, [selectedWilaya]);

  const { setDeliveryPriceGlobal, setQuantityGlobal } = useGlobalContext();
  useEffect(() => {
    setDeliveryPriceGlobal(deliveryPrice);
  }, [deliveryPrice]);

  useEffect(() => {
    setQuantityGlobal(quantity);
  }, [quantity]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value;
    setSelectedWilaya(value);

    // const myIndex: keyof typeof myPrices = value;
    setDeliveryPrice(myPrices[value]);
  };

  const handleSelectCommunes = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCommune(value);
  };

  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const firstName = data.get("fName");
    if (typeof firstName !== "string" || !firstName) return;

    const phoneNumber = data.get("phone");
    if (typeof phoneNumber !== "string" || !phoneNumber) return;

    if (selectedWilaya === "") {
      setAlert({
        showAlert: true,
        type: "wilaya",
        data: { error: "اختر الولاية" },
      });
      return;
    }

    const adress = `${selectedWilaya} , ${selectedCommune ?? ""}`;
    if (typeof adress !== "string") return;

    // if (typeof productId !== "number" || !productId) return;
    if (typeof productName !== "string" || !productName) return;

    if (typeof productPrice !== "number" || !productPrice) return;

    // const livraison = data.get("livraison");
    const livraison = deliveryPrice.toString();

    if (typeof livraison !== "string" || !livraison) return;

    if (typeof quantity !== "number") return;

    const result = await createOrderAction(
      firstName,
      phoneNumber,
      adress,
      productName,
      productPrice,
      livraison,
      quantity,
      selectedColor
    );
    setPending(false);
    console.log(pending);

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
        <h3 className={styles.align_center}> اضف معلوماتك لطلب هذا المنتج</h3>
        <form ref={formRef} action={action} className={styles.form} id="form">
          <input
            type="text"
            name="fName"
            placeholder=" الاسم و اللقب"
            required
          />
          <input type="text" name="phone" placeholder="رقم الهاتف" required />
          <div className={styles.adress_container}>
            <select
              defaultValue={selectedWilaya}
              name="wilayas"
              onChange={handleSelect}
            >
              <option value="" disabled>
                اختر الولاية
              </option>
              {wilayas.map((wilaya) => {
                return (
                  <option key={wilayas.indexOf(wilaya)} value={wilaya}>
                    {wilaya}
                  </option>
                );
              })}
            </select>
            {communes.length > 0 && selectedWilaya !== "" ? (
              <select
                defaultValue="choose"
                name="communes"
                onChange={handleSelectCommunes}
              >
                <option value="choose" disabled>
                  اختر البلدية (اختياري)
                </option>
                {communes.map((commune) => {
                  return (
                    <option key={communes.indexOf(commune)} value={commune}>
                      {commune}
                    </option>
                  );
                })}
              </select>
            ) : (
              <select disabled defaultValue="choose" name="communes">
                <option value="choose" disabled>
                  اختر البلدية (اختياري)
                </option>
              </select>
            )}
            {selectedWilaya && (
              <h4 className={styles.delivery_price}>
                التوصيل لباب المنزل {deliveryPrice} دج
              </h4>
            )}
          </div>
          {alert.showAlert && alert.type === "wilaya" && (
            <p className={styles.wilaya_alert}>اختر الولاية</p>
          )}
          {/* <h2>نوع التوصيل</h2>
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
          </div> */}
          {/* {colors.length >= 1 && colors[0] !== "" ? (
            <h2>اختر اللون و الكمية</h2>
          ) : (
            <h2>اختر الكمية</h2>
          )} */}
          <div className={styles.req_details}>
            {/* {colors.length >= 1 && colors[0] !== "" && (
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
            )} */}
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
            {/* <button className={styles.action_btn} type="submit">
              اطلب الان
            </button> */}
            <SubmitBtn />
          </div>
          {/* <button className={styles.action_btn} type="submit">
            اطلب الان
          </button> */}
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
        {/* <p>اللقب : {data.lastName}</p> */}
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
    <button disabled={pending} className={styles.action_btn} type="submit">
      {pending ? <Loader /> : "اشتر الان"}
    </button>
  );
};

const Loader = () => {
  return (
    <div className="loader_container">
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </div>
  );
};

export default BuyerInfos;
