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

  return (
    <main>
      <div className="container">
        <ClientContainer
          newOrders={newOrders}
          confirmedOrders={confirmedOrders}
          recievedOrders={recievedOrders}
          canceledOrders={canceledOrders}
          onDeleveryOrders={onDeleveryOrders}
          returnedOrders={returnedOrders}
        />
      </div>
    </main>
  );
};

export default page;
