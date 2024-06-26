import React from "react";
import { getProductById } from "@/lib/product";
import styles from "@/styles/Product.module.css";
import DisplayImages from "./DisplayImages";
import BuyerInfos from "./BuyerInfos";
import Resume from "./Resume";
import Markdown from "react-markdown";
import Medias from "./Medias";

const page = async ({ params }: { params: { id: string } }) => {
  const { product } = await getProductById(params.id);

  if (product) {
    const { id, title, description, images, colors, price, oldPrice } = product;
    const colorsArr = colors?.split(",") || [];
    const imagesArr = images.split(",");

    return (
      <main className={styles.main}>
        <div className="container">
          <div className={styles.main_flex}>
            <div className={styles.product_info}>
              <DisplayImages images={imagesArr} />
              <h1 className={styles.product_title}>{title}</h1>
              <div className={styles.prices}>
                <span className={styles.old_price}>{oldPrice}</span>
                <h2>{price} دج</h2>
              </div>
              <Markdown>{description}</Markdown>
            </div>
            <div className={styles.buyer_resume_container}>
              <div className={styles.buyer_info}>
                <BuyerInfos
                  colors={colorsArr}
                  productName={title}
                  productPrice={price}
                />
              </div>
              <Resume title={title} price={price} />
            </div>
          </div>
        </div>
        {imagesArr.length > 1 && <Medias images={imagesArr} />}
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
