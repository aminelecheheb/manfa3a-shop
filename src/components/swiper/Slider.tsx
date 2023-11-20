"use client";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

import Image from "next/image";
import styles from "@/styles/page.module.css";
import image1 from "../../../public/1.png";
import image2 from "../../../public/2.png";
import image3 from "../../../public/3.png";
import phone1 from "../../../public/1-phone.png";
import phone2 from "../../../public/2-phone.png";
import phone3 from "../../../public/3-phone.png";

const Slider = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    window && setWindowWidth(window.innerWidth);
  }, []);

  const calculate = () => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", calculate);
    return () => {
      window.removeEventListener("resize", calculate);
    };
  });

  // console.log(windowWidth);

  return (
    <div className={styles.swiper_container}>
      <div className={styles.btn_container}>
        <button className={styles.slider_btn}>
          <Link href="/shop">
            <span>اكتشف الان</span>
          </Link>
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
            {windowWidth > 770 ? (
              <Image className={styles.img} fill alt="banner" src={image1} />
            ) : (
              <Image className={styles.img} fill alt="banner" src={phone1} />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.image_container}>
            {windowWidth > 770 ? (
              <Image className={styles.img} fill alt="banner" src={image2} />
            ) : (
              <Image className={styles.img} fill alt="banner" src={phone2} />
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.image_container}>
            {windowWidth > 770 ? (
              <Image className={styles.img} fill alt="banner" src={image3} />
            ) : (
              <Image className={styles.img} fill alt="banner" src={phone3} />
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
