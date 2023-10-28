"use server";
import { revalidatePath } from "next/cache";
import { createCategory, deleteCategory } from "./lib/category";
import { createProduct } from "./lib/product";

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
  categoryId: string
) => {
  try {
    const categoryIdInt = parseInt(categoryId);
    const product = await createProduct(
      title,
      description,
      attribute,
      images,
      categoryIdInt
    );
    revalidatePath("/dashboard");
    return { product };
  } catch (error) {
    return { error };
  }
};
