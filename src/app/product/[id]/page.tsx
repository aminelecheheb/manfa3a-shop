import React from "react";
import { getProductById } from "@/lib/product";
import styles from "@/styles/Product.module.css";
import DisplayImages from "./DisplayImages";
import BuyerInfos from "./BuyerInfos";

const page = async ({ params }: { params: { id: string } }) => {
  const { product } = await getProductById(params.id);

  if (product) {
    const { id, title, description, images } = product;
    const imagesArr = images.split(",");

    return (
      <main>
        <div className="container">
          <div className={styles.main_flex}>
            <div className={styles.product_info}>
              <DisplayImages images={imagesArr} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className={styles.buyer_info}>
              <BuyerInfos />
            </div>
          </div>
        </div>
      </main>
    );
  } else
    return (
      <main>
        <div className="container">
          <h2>error occured</h2>
        </div>
      </main>
    );
};

export default page;
