import ClientContainer from "./ClientContainer";
import { getOrders } from "@/lib/order";
import Table from "./Table";

const page = async () => {
  const newOrders = await getOrders("new");
  const confirmedOrders = await getOrders("confirmed");
  const recievedOrders = await getOrders("recieved");
  const canceledOrders = await getOrders("canceled");

  return (
    <main>
      <div className="container">
        <ClientContainer
          newOrders={newOrders}
          confirmedOrders={confirmedOrders}
          recievedOrders={recievedOrders}
          canceledOrders={canceledOrders}
        />
      </div>
    </main>
  );
};

export default page;
