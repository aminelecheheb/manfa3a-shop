"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import styles from "@/styles/page.module.css";
import image1 from "../../../public/1.png";
import image2 from "../../../public/2.png";
import image3 from "../../../public/3.png";

const Slider = () => {
  return (
    <div className={styles.swiper_container}>
      <div className={styles.btn_container}>
        <button className={styles.slider_btn}>
          <span>اكتشف الان</span>
        </button>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.image_container}>
            <Image className={styles.img} fill alt="banner" src={image1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.image_container}>
            <Image className={styles.img} fill alt="banner" src={image2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.image_container}>
            <Image className={styles.img} fill alt="banner" src={image3} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
