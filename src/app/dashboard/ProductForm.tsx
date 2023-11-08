"use client";

import styles from "@/styles/Dashboard.module.css";
import { useRef, useState } from "react";
import { createProductAction } from "@/_actions";
import { useFormStatus } from "react-dom";
import MDEditor from "@uiw/react-md-editor";

const isValidURL = (url: string) => {
  const urlPattern = /^(http|https):\/\/\S+\.(jpeg|jpg|gif|png)$/i;
  return urlPattern.test(url);
};

const ProductForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState<string | undefined>("");

  async function action(data: FormData) {
    const title = data.get("title");
    if (typeof title !== "string" || !title) return;

    const description = value;
    if (typeof description !== "string" || !description) return;

    const attribute = data.get("attribute");
    if (typeof attribute !== "string") return;

    const images = data.get("images");
    if (typeof images !== "string" || !images) return;
    const imagesArr = images.split(",");
    let validImages = imagesArr?.filter((image: string) => {
      return isValidURL(image);
    });
    if (validImages.length === 0) return;
    const newImages = validImages.toString();
    // console.log(newImages);

    const categoryId = data.get("categoryId");
    if (typeof categoryId !== "string" || !categoryId) return;

    const price = data.get("price");
    if (typeof price !== "string" || !price) return;

    const oldPrice = data.get("oldPrice");
    if (typeof oldPrice !== "string" || null) return;

    const colors = data.get("colors");
    if (typeof colors !== "string" || null) return;

    const product = await createProductAction(
      title,
      description,
      attribute,
      newImages,
      price,
      oldPrice,
      colors,
      categoryId
    );
    formRef.current?.reset();
    // console.log(product);
  }

  return (
    <div data-color-mode="light" className={styles.newProduct}>
      <h2>create new product</h2>
      <form ref={formRef} className={styles.newProduct_form} action={action}>
        <input type="text" name="title" placeholder="title" required />
        <div>
          <MDEditor value={value} onChange={setValue} />
        </div>
        <input type="text" name="attribute" placeholder="attribute" />
        <textarea name="images" placeholder="images urls" required></textarea>
        <input name="price" type="number" placeholder="price" required />
        <input name="oldPrice" type="number" placeholder="old price" />
        <textarea name="colors" placeholder="colors"></textarea>
        <input
          type="string"
          name="categoryId"
          placeholder="category id"
          required
        />
        <SubmitBtn />
      </form>
    </div>
  );
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "loading..." : "submit"}</button>
  );
};

export default ProductForm;
