"use client";

import styles from "@/styles/Dashboard.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { deleteProductAction, publishProductAction } from "@/_actions";
import Link from "next/link";
import { useState } from "react";
import { useGlobalContext } from "@/context/appContext";

const Product = ({ product }: { product: ProductProps }) => {
  const { status } = useSession();
  const { id, title, price, attribute, images, published, oldPrice } = product;
  const imagesArr = images.split(",");

  return (
    <div className={styles.product}>
      {attribute && <span className={styles.attribute}>{attribute}</span>}
      <Link href={`/product/${id}`}>
        <div className={styles.image_container}>
          <Image src={imagesArr[0]} fill alt={title} className={styles.img} />
        </div>
      </Link>
      <div className={styles.infos}>
        <h3 className={styles.product_title}>{title}</h3>
        <div className={styles.prices}>
          {" "}
          {oldPrice && <span className={styles.old_price}>{oldPrice}</span>}
          <h4 className={styles.price}>{price} دج</h4>
        </div>
      </div>
      {status === "authenticated" ? (
        <AdminActions published={published} id={id} />
      ) : (
        <UserActions productId={id} />
      )}
    </div>
  );
};

const UserActions = ({ productId }: { productId: number }) => {
  return (
    <div className={styles.user_actions}>
      <Link className={styles.buy_now} href={`/product/${productId}`}>
        <h4>اشتر الان</h4>
      </Link>
    </div>
  );
};

const AdminActions = ({
  published,
  id,
}: {
  published: boolean;
  id: number;
}) => {
  const [loadingDelete, setLoadingDelete] = useState(false);
  const handlePublish = async (id: number) => {
    const product = await publishProductAction(id, true);
  };

  const handleUnpublish = async (id: number) => {
    const product = await publishProductAction(id, false);
  };

  const handleDelete = async (id: number) => {
    setLoadingDelete(true);
    await deleteProductAction(id);
    setLoadingDelete(false);
  };

  const { showModel } = useGlobalContext();
  return (
    <div className={styles.admin_actions}>
      <button
        className={styles.delete}
        disabled={loadingDelete}
        // onClick={() => handleDelete(id)}
        onClick={showModel}
      >
        {loadingDelete ? "loading" : "delete"}
      </button>
      <button className={styles.edit}>edit</button>
      {published ? (
        <button
          className={styles.unpublish}
          onClick={() => handleUnpublish(id)}
        >
          unpublish
        </button>
      ) : (
        <button className={styles.publish} onClick={() => handlePublish(id)}>
          publish
        </button>
      )}
    </div>
  );
};

export default Product;
