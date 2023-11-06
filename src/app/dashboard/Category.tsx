"use client";

import { deleteCategoryAction } from "@/_actions";
import styles from "@/styles/Dashboard.module.css";
import { useState } from "react";

type CategoryType = {
  id: number;
  category: string;
};

const Category = ({ category }: { category: CategoryType }) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    await deleteCategoryAction(category.id);
    setLoading(false);
  };
  return (
    <div className={styles.category}>
      <h4>{`id : ${category.id}`}</h4>
      <h3>{category.category}</h3>
      <button disabled={loading} onClick={handleDelete}>
        {loading ? "loading" : "delete"}
      </button>
    </div>
  );
};

export default Category;
