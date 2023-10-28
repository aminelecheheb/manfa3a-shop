import styles from "@/styles/Dashboard.module.css";
import Image from "next/image";

const Product = ({ product }: { product: ProductProps }) => {
  const { title, description, attribute, images } = product;
  const imagesArr = images.split(",");

  return (
    <div className={styles.product}>
      <div className={styles.image_container}>
        <Image src={imagesArr[0]} fill alt={title} className={styles.img} />
      </div>
      <div className={styles.infos}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;
