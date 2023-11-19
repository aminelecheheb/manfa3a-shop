"use client";
import Image from "next/image";
import livraison from "../../public/livraison.png";
import livraisonMobile from "../../public/livraison_phone.png";
import React, { useState, useEffect } from "react";

const LivraisonImages = () => {
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

  return windowWidth <= 770 ? (
    <Image src={livraisonMobile} fill alt="livraison" />
  ) : (
    <Image src={livraison} fill alt="livraison" />
  );
};

export default LivraisonImages;
