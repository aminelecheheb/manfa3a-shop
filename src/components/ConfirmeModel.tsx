"use client";

import React, { useState } from "react";
import styles from "@/styles/Model.module.css";
import { useGlobalContext } from "@/context/appContext";
import { deleteProductAction, deleteCategoryAction } from "@/_actions";

const ConfirmeModel = () => {
  const { hideModel, state } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const handleDeleteCategory = async (id: number) => {
    setLoading(true);
    await deleteCategoryAction(id);
    setLoading(false);
    hideModel();
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    await deleteProductAction(id);
    setLoading(false);
    hideModel();
  };

  return (
    <div className={styles.model_container}>
      <h3>Confirme delete</h3>
      <div className={styles.actions}>
        <button className={styles.cancel} onClick={hideModel}>
          cancel
        </button>
        {state.model.type === "product" && (
          <button
            onClick={() => {
              handleDelete(state.model.id);
            }}
            disabled={loading}
            className={styles.confirme}
          >
            {loading ? "loading" : "confirme"}
          </button>
        )}
        {state.model.type === "category" && (
          <button
            className={styles.confirme}
            onClick={() => handleDeleteCategory(state.model.id)}
            disabled={loading}
          >
            {loading ? "loading" : `delete category ${state.model.id}`}
          </button>
        )}
      </div>
    </div>
  );
};

export default ConfirmeModel;
