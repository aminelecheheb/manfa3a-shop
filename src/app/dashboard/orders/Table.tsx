"use client";
import styles from "@/styles/Orders.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { updateOrderAction } from "@/_actions";

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

const Table = ({
  orders,
  activeTab,
}: {
  orders: Orders;
  activeTab: string;
}) => {
  let totale = 0;
  if (Array.isArray(orders)) {
    if (orders.length > 0) {
      return (
        <div className={styles.table_container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>رقم الطلبية</th>
                <th>الاسم</th>
                {/* <th>اللقب</th> */}
                <th>رقم الهاتف</th>
                <th>العنوان</th>
                <th>نوع التوصيل</th>
                <th>المنتج</th>
                <th>اللون</th>
                <th>الكمية</th>
                <th>السعر</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                totale = totale + order.productPrice * order.quantity;
                const cancelOrder = async () => {
                  const result = await updateOrderAction(order.id, "canceled");
                };
                const confirmOrder = async () => {
                  const result = await updateOrderAction(order.id, "confirmed");
                };
                const recievedOrder = async () => {
                  const result = await updateOrderAction(order.id, "recieved");
                };

                const onDeleveryOrder = async () => {
                  const result = await updateOrderAction(
                    order.id,
                    "on delevery"
                  );
                  // console.log(result);
                };
                const returnedOrder = async () => {
                  const result = await updateOrderAction(order.id, "returned");
                  // console.log(result);
                };

                return (
                  <tr key={order.id}>
                    {/* <td>{orders.indexOf(order) + 1}</td> */}
                    <td>{order.id}</td>
                    <td>{order.firstName}</td>
                    {/* <td> {order.lastName} </td> */}
                    <td> {order.phoneNumber} </td>
                    <td>{order.adress}</td>
                    <td> {order.livraison} </td>
                    <td>{order.productName}</td>
                    <td> {order.color ?? "المتوفر"} </td>
                    <td> {order.quantity} </td>
                    <td>{order.quantity * order.productPrice} دج</td>
                    {activeTab === "new orders" && (
                      <>
                        <td className={styles.btn_td}>
                          <button
                            className={`${styles.btn} ${styles.btn_danger}`}
                            onClick={cancelOrder}
                          >
                            الغاء
                          </button>
                        </td>
                        <td className={styles.btn_td}>
                          <button
                            className={`${styles.btn} ${styles.btn_success}`}
                            onClick={confirmOrder}
                          >
                            تأكيد
                          </button>
                        </td>
                      </>
                    )}
                    {activeTab === "confirmed orders" && (
                      <>
                        <td className={styles.btn_td}>
                          <button
                            className={`${styles.btn} ${styles.btn_danger}`}
                            onClick={cancelOrder}
                          >
                            الغاء
                          </button>
                        </td>
                        <td className={styles.btn_td}>
                          <button
                            className={`${styles.btn} ${styles.btn_success}`}
                            onClick={onDeleveryOrder}
                          >
                            قيد التوصيل
                          </button>
                        </td>
                      </>
                    )}
                    {activeTab === "on delevery" && (
                      <>
                        <td className={styles.btn_td}>
                          <button
                            className={`${styles.btn} ${styles.btn_danger}`}
                            onClick={returnedOrder}
                          >
                            ارجاع
                          </button>
                        </td>
                        <td className={styles.btn_td}>
                          <button
                            className={`${styles.btn} ${styles.btn_success}`}
                            onClick={recievedOrder}
                          >
                            استلام
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
            <tfoot className={styles.tfoot}>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                {/* <td></td> */}
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td
                  // colSpan={10}
                  className={styles.totale}
                >
                  {totale} دج
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    } else {
      return <h2>لا توجد طلبيات</h2>;
    }
  } else {
    return <h1>هناك خلل ما</h1>;
  }
};

export default Table;
