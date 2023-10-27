"use server";
import { revalidatePath } from "next/cache";
import { createCategory } from "./lib/category";

export async function createCategoryAction(category: string) {
  const data = await createCategory(category);
  // revalidatePath("/dashboard");
  return data;
}
