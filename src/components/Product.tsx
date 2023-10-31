"use client";

import styles from "@/styles/Dashboard.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { deleteProductAction, publishProductAction } from "@/_actions";
import Link from "next/link";

const Product = ({ product }: { product: ProductProps }) => {
  const { status } = useSession();
  const { id, title, price, attribute, images, published } = product;
  const imagesArr = images.split(",");

  return (
    <div className={styles.product}>
      <div className={styles.image_container}>
        <Image src={imagesArr[0]} fill alt={title} className={styles.img} />
      </div>
      <div className={styles.infos}>
        <h3>{title}</h3>
        <h4>{price} دج</h4>
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
  const handlePublish = async (id: number) => {
    const product = await publishProductAction(id, true);
  };

  const handleUnpublish = async (id: number) => {
    const product = await publishProductAction(id, false);
  };
  return (
    <div className={styles.admin_actions}>
      <button onClick={() => deleteProductAction(id)}>delete</button>
      <button>edit</button>
      {published ? (
        <button onClick={() => handleUnpublish(id)}>unpublish</button>
      ) : (
        <button onClick={() => handlePublish(id)}>publish</button>
      )}
    </div>
  );
};

export default Product;
