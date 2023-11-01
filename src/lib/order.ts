import { prisma } from "./prisma";

export async function createOrder(
  firstName: string,
  lastName: string,
  phoneNumber: string,
  adress: string,
  productId: number,
  livraison: string,
  quantity: number,
  color: string | null
) {
  try {
    const order = await prisma.order.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        adress,
        productId,
        livraison,
        quantity,
        color,
      },
    });
    return { order };
  } catch (error) {
    return { error };
  }
}
