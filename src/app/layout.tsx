import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/kg-card.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HODL",
  description: "hodleveryday.com เป็นเว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ",
  keywords: ["hodleveryday.com", "bitcoin", "BTC", "cryptocurrency", "คริปโตเคอร์เรนซี่", "เงินดิจิทัล", "บิทคอยน์", "บล็อกเชน", "blockchain"],
  applicationName: "hodleveryday",
  authors: [{ name: "hodleveryday", url: "https://hodleveryday.com" }],
  creator: "hodleveryday",
  icons: [{ rel: "icon", url: "https://hodleveryday.com/pixel - logo.png" }, { rel: "apple-touch-icon", url: "https://hodleveryday.com/pixel - logo.png" }],
  openGraph: {
    type: "article",
    url: "https://hodleveryday.com",
    title: "hodleveryday.com เป็นเว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ",
    description: "hodleveryday.com เป็นเว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ",
    siteName: "hodleveryday",
    locale: "th_TH",
    images: "https://hodleveryday.com/pixel - logo.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hodleveryday",
    title: "hodleveryday.com เป็นเว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ",
    description: "hodleveryday.com เป็นเว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ",
    images: "https://hodleveryday.com/pixel - logo.png",
  },
  abstract: "hodleveryday.com เป็นเว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
