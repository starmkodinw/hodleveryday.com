import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/nav";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Privacy Policy - hodleveryday.com",
  description: "Privacy Policy hodleveryday.com เคารพความเป็นส่วนตัวของผู้ใช้ของเรา นโยบายความเป็นส่วนตัวนี้อธิบายถึงประเภทของข้อมูลที่เรารวบรวม วิธีการใช้งาน และตัวเลือกที่คุณเชื่อมโยงกับข้อมูลของคุณ",
  keywords: ["Privacy", "Policy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hodleveryday.com/privacy" />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
