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

export const getOrders = async (state: string) => {
  try {
    const orders = await prisma.order.findMany({
      where: { state },
      orderBy: { updatedAt: "desc" },
      include: {
        product: {
          select: {
            id: true,
            title: true,
            price: true,
          },
        },
      },
    });
    return orders;
  } catch (error) {
    return { error };
  }
};

export const updateOrder = async (id: number, payload: string) => {
  try {
    const order = await prisma.order.update({
      where: { id },
      data: { state: payload },
    });
    return { order };
  } catch (error) {
    return { error };
  }
};

const deleteOrders = async () => {
  await prisma.order.deleteMany();
};

// deleteOrders();
