import { prisma } from "./prisma";

export async function getAllProducts(published: boolean) {
  try {
    const products = await prisma.product.findMany({
      where: {
        published,
      },
    });
    return { products };
  } catch (error) {
    return { error };
  }
}

export const getProductByCategory = async (
  category: string,
  published: boolean
) => {
  try {
    const id = parseInt(category);
    const products = await prisma.product.findMany({
      where: { category: { id }, published },
    });
    return { products };
  } catch (error) {
    return { error };
  }
};

export async function createProduct(
  title: string,
  description: string,
  attribute: string,
  images: string,
  price: number,
  oldPrice: number,
  categoryId: number
) {
  try {
    const product = await prisma.product.create({
      data: {
        title,
        description,
        attribute,
        images,
        price,
        oldPrice,
        categoryId,
      },
    });
    return { product };
  } catch (error) {
    return { error };
  }
}

export const deleteProduct = async (id: number) => {
  try {
    const product = await prisma.product.delete({
      where: { id },
    });
    return { product };
  } catch (error) {
    return { error };
  }
};

export const publishProduct = async (id: number, published: boolean) => {
  try {
    const product = await prisma.product.update({
      where: { id },
      data: { published },
    });
    return { product };
  } catch (error) {
    return { error };
  }
};
