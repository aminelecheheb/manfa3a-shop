"use client";

import { deleteCategoryAction } from "@/_actions";
import styles from "@/styles/Dashboard.module.css";

type CategoryType = {
  id: number;
  category: string;
};

const Category = ({ category }: { category: CategoryType }) => {
  return (
    <div className={styles.category}>
      <h4>{`id : ${category.id}`}</h4>
      <h3>{category.category}</h3>
      <button onClick={() => deleteCategoryAction(category.id)}>delete</button>
    </div>
  );
};

export default Category;
