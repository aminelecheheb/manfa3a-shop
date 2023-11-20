"use client";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import styles from "@/styles/page.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Product from "./Product";

const HomeSlider = ({ products }: { products: ProductProps[] }) => {
  const [x, setX] = useState(400);
  const swiperRef = useRef(null);

  useEffect(() => {
    window.innerWidth > 500
      ? setX(window.innerWidth / 400)
      : setX(window.innerWidth / 250);
  }, []);

  const checkX = () => {
    window.innerWidth > 500
      ? setX(window.innerWidth / 400)
      : setX(window.innerWidth / 250);
  };

  useEffect(() => {
    window.addEventListener("resize", checkX);
    return () => {
      window.removeEventListener("resize", checkX);
    };
  });
  return (
    <div className={styles.my_wrapper}>
      <div className="container">
        <h2 className={styles.slider_title}>افضل المنتجات</h2>
        <Swiper
          slidesPerView={x}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Product product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
