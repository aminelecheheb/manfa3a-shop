"use client";
import styles from "@/styles/Product.module.css";
import Image from "next/image";

import React from "react";

const Medias = ({ images }: { images: string[] }) => {
  const medias = images.slice(1);

  return (
    <div className={styles.medias_wrapper}>
      {medias.map((media) => {
        return (
          <div className={styles.media_container} key={medias.indexOf(media)}>
            <Image
              src={media}
              fill
              alt="design"
              className={styles.media}
              objectFit="cover"
              // onLoad={(e) => handleImageLoad(e)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Medias;
