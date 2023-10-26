import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/context/provider";

export const metadata: Metadata = {
  title: "Manfa3a Shop",
  description: "best products for best prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className="wrapper">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
