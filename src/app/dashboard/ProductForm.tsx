"use client";

import styles from "@/styles/Dashboard.module.css";
import { useRef } from "react";
import { createProductAction } from "@/_actions";

const ProductForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const title = data.get("title");
    if (typeof title !== "string" || !title) return;

    const description = data.get("description");
    if (typeof description !== "string" || !description) return;

    const attribute = data.get("attribute");
    if (typeof attribute !== "string") return;

    const images = data.get("images");
    if (typeof images !== "string" || !images) return;

    const categoryId = data.get("categoryId");
    if (typeof categoryId !== "string" || !categoryId) return;

    const product = await createProductAction(
      title,
      description,
      attribute,
      images,
      categoryId
    );
    console.log(product);

    formRef.current?.reset();
  }
  return (
    <div>
      <h2>create new product</h2>
      <form ref={formRef} className={styles.newProduct_form} action={action}>
        <input type="text" name="title" placeholder="title" required />
        <textarea
          name="description"
          placeholder="description"
          required
        ></textarea>
        <input type="text" name="attribute" placeholder="attribute" />
        <textarea name="images" placeholder="images urls" required></textarea>
        <input
          type="string"
          name="categoryId"
          placeholder="category id"
          required
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
