import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/context/provider";
import Footer from "@/components/Footer";
import ToggleNav from "@/components/ToggleNav";
import { getCategories } from "@/lib/category";

export const metadata: Metadata = {
  title: "Weal store",
  description: "best products for best prices",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { categories } = await getCategories();

  return (
    <html lang="ar">
      <body className="wrapper">
        <Providers>
          <Navbar />
          <ToggleNav categories={categories} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
