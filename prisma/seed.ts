import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("test", 12);
  const admin = await prisma.admin.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      email: "test@test.com",
      name: "Admin",
      password,
    },
  });

  console.log({ admin });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
