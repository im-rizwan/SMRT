import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import NavMenu from "./Components/Navbar"; // Adjust the import path as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMRT",
  description: "SMRT: Expert construction and interior design services for commercial and residential projects, including offices, kitchens, hotels, shops, and more. Transforming spaces with precision and creativity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative pb-16">
          <NavMenu /> {/* Render the NavMenu component */}

        </div>
        <main className="pt-[25px]">
        {children}

        </main>
       
       
      </body>
    </html>
  );
}
