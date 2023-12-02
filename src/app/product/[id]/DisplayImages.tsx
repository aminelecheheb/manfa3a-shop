"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Product.module.css";

const DisplayImages = ({ images }: { images: string[] }) => {
  const [bigImage, setBigImage] = useState(images[0]);
  return (
    <div className={styles.images_container}>
      <div className={styles.big_image_container}>
        <Image fill src={bigImage} alt="product image" />
      </div>
      {/* <div className={styles.small_images}>
        {images.map((image) => {
          return (
            <div
              key={images.indexOf(image)}
              className={
                image === bigImage
                  ? `${styles.small_image_container} ${styles.active}`
                  : styles.small_image_container
              }
              onClick={() => setBigImage(image)}
            >
              <Image src={image} alt="small image" fill />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default DisplayImages;
