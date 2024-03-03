import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/nav";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Privacy Policy - hodleveryday.com",
  description: "Privacy Policy hodleveryday.com เคารพความเป็นส่วนตัวของผู้ใช้ของเรา นโยบายความเป็นส่วนตัวนี้อธิบายถึงประเภทของข้อมูลที่เรารวบรวม วิธีการใช้งาน และตัวเลือกที่คุณเชื่อมโยงกับข้อมูลของคุณ",
  keywords: ["Privacy", "Policy"],
  alternates: {
    canonical: "https://hodleveryday.com/blog/privacy",
  }
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={inter.className}>
      <Nav />
      {children}
      <Footer />
    </section>
  );
}
