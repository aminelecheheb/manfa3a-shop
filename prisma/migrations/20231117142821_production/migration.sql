-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "attribute" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "oldPrice" INTEGER,
    "colors" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "categoryId" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productPrice" INTEGER NOT NULL,
    "livraison" TEXT NOT NULL,
    "color" TEXT,
    "quantity" INTEGER NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'new',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
