"use server";
import ClientContainer from "./ClientContainer";
import { getOrders } from "@/lib/order";

const page = async () => {
  const newOrders = await getOrders("new");
  const confirmedOrders = await getOrders("confirmed");
  const recievedOrders = await getOrders("recieved");
  const canceledOrders = await getOrders("canceled");
  const returnedOrders = await getOrders("returned");
  const onDeleveryOrders = await getOrders("on delevery");

  // console.log(newOrders);

  return (
    <main>
      <div className="container">
        <ClientContainer
          newOrders={Array.isArray(newOrders) ? newOrders : []}
          confirmedOrders={
            Array.isArray(confirmedOrders) ? confirmedOrders : []
          }
          recievedOrders={Array.isArray(recievedOrders) ? recievedOrders : []}
          canceledOrders={Array.isArray(canceledOrders) ? canceledOrders : []}
          onDeleveryOrders={
            Array.isArray(onDeleveryOrders) ? onDeleveryOrders : []
          }
          returnedOrders={Array.isArray(returnedOrders) ? returnedOrders : []}
        />
      </div>
    </main>
  );
};

export default page;
