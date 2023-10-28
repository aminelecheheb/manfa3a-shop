"use server";
import { revalidatePath } from "next/cache";
import { createCategory, deleteCategory } from "./lib/category";
import { createProduct, deleteProduct, publishProduct } from "./lib/product";

export async function createCategoryAction(category: string) {
  const data = await createCategory(category);
  revalidatePath("/dashboard");
  return data;
}

export const deleteCategoryAction = async (id: number) => {
  await deleteCategory(id);
  revalidatePath("/dashboard");
};

export const createProductAction = async (
  title: string,
  description: string,
  attribute: string,
  images: string,
  price: string,
  oldPrice: string,
  categoryId: string
) => {
  try {
    const categoryIdInt = parseInt(categoryId);
    const priceInt = parseInt(price);
    const oldPriceInt = parseInt(oldPrice);

    const product = await createProduct(
      title,
      description,
      attribute,
      images,
      priceInt,
      oldPriceInt,
      categoryIdInt
    );
    revalidatePath("/dashboard");
    return { product };
  } catch (error) {
    return { error };
  }
};

export const deleteProductAction = async (id: number) => {
  await deleteProduct(id);
  revalidatePath("/dashboard");
};

export const publishProductAction = async (id: number, published: boolean) => {
  await publishProduct(id, published);
  revalidatePath("/dashboard");
};
