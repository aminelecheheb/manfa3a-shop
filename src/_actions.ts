"use server";
import { revalidatePath } from "next/cache";
import { createCategory, deleteCategory } from "./lib/category";
import { createProduct, deleteProduct, publishProduct } from "./lib/product";
import { createOrder, updateOrder } from "./lib/order";
import { createUser } from "./lib/auth";

export async function createCategoryAction(category: string) {
  await createCategory(category);
  revalidatePath("/dashboard");
  revalidatePath("/shop");
  revalidatePath("/shop/[slug]");
}

export const deleteCategoryAction = async (id: number) => {
  const category = await deleteCategory(id);
  revalidatePath("/dashboard");
  revalidatePath("/shop");
  revalidatePath("/shop/[slug]");
  revalidatePath("/*");
  return category;
};

export const createProductAction = async (
  title: string,
  description: string,
  attribute: string,
  images: string,
  price: string,
  oldPrice: string,
  colors: string,
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
      colors,
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
  revalidatePath("/shop");
  revalidatePath("/shop/[slug]");
};

export const publishProductAction = async (id: number, published: boolean) => {
  await publishProduct(id, published);
  revalidatePath("/dashboard");
  revalidatePath("/shop");
  revalidatePath("/shop/[slug]");
};

// orders
export const createOrderAction = async (
  firstName: string,
  lastName: string,
  phoneNumber: string,
  adress: string,
  productName: string,
  productPrice: number,
  livraison: string,
  quantity: number,
  color: string | null
) => {
  const order = await createOrder(
    firstName,
    lastName,
    phoneNumber,
    adress,
    productName,
    productPrice,
    livraison,
    quantity,
    color
  );
  revalidatePath("/dashboard/orders");
  return order;
};

export const updateOrderAction = async (id: number, payload: string) => {
  try {
    const order = await updateOrder(id, payload);
    revalidatePath("/dashboard/orders");
    return order;
  } catch (error) {
    return error;
  }
};

export async function createUserAction(
  name: string,
  email: string,
  password: string
) {
  await createUser(name, email, password);
}
