"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import AdminPannel from "./components/AdminPannel";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  let pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname.startsWith("/admin") ? <AdminPannel /> : <Navbar />}
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
