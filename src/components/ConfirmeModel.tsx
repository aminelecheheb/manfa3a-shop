"use client";

import React from "react";
import styles from "@/styles/Model.module.css";
import { useGlobalContext } from "@/context/appContext";

const ConfirmeModel = ({ modelAction }: { modelAction: () => void }) => {
  const { hideModel } = useGlobalContext();
  return (
    <div className={styles.model_container}>
      <h3>Confirme delete</h3>
      <div className={styles.actions}>
        <button className={styles.cancel} onClick={hideModel}>
          cancel
        </button>
        <button className={styles.confirme}>confirme</button>
      </div>
    </div>
  );
};

export default ConfirmeModel;
