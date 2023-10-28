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

export async function createProduct(
  title: string,
  description: string,
  attribute: string,
  images: string,
  categoryId: number
) {
  try {
    const product = await prisma.product.create({
      data: { title, description, attribute, images, categoryId },
    });
    return { product };
  } catch (error) {
    return { error };
  }
}
