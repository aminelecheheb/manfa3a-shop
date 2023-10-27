"use server";
import { revalidatePath } from "next/cache";
import { createCategory, deleteCategory } from "./lib/category";

export async function createCategoryAction(category: string) {
  const data = await createCategory(category);
  revalidatePath("/dashboard");
  return data;
}

export const deleteCategoryAction = async (id: number) => {
  await deleteCategory(id);
  revalidatePath("/dashboard");
};
