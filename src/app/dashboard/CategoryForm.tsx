"use client";
import { createCategoryAction } from "@/_actions";
import { useRef, useState } from "react";
import styles from "@/styles/Dashboard.module.css";

const CategoryForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function action(data: FormData) {
    setLoading(true);
    const categoryInput = data.get("category");
    if (typeof categoryInput !== "string" || !categoryInput) return;
    await createCategoryAction(categoryInput);
    formRef.current?.reset();
    setLoading(false);
  }

  return (
    <div className={styles.newCategory}>
      <h2>Create new category</h2>
      <form ref={formRef} action={action} className={styles.newCategory_form}>
        <input type="text" name="category" />
        <button disabled={loading}>{loading ? "loading" : "submit"}</button>
      </form>
    </div>
  );
};

export default CategoryForm;
