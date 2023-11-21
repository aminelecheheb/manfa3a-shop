"use client";

import { deleteCategoryAction } from "@/_actions";
import { useGlobalContext } from "@/context/appContext";
import styles from "@/styles/Dashboard.module.css";
import { useState } from "react";

type CategoryType = {
  id: number;
  category: string;
};

const Category = ({ category }: { category: CategoryType }) => {
  const { state, showModel } = useGlobalContext();

  return (
    <div className={styles.category}>
      <h4>{`id : ${category.id}`}</h4>
      <h3>{category.category}</h3>
      <button onClick={() => showModel("category", category.id)}>delete</button>
    </div>
  );
};

export default Category;
