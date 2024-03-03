import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/kg-card.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hodleveryday.com'),
  robots: {
    index: true,
    follow: true,
  },
  title: "hodleveryday.com - เว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร บทความเกี่ยวกับคริปโตเคอร์เรนซี่ Bitcoin และ Blockchain เหมาะสำหรับนักลงทุนทุกระดับ",
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
    images: [
      {
        url: "http://localhost:3000/wallpaper.jpeg",
        alt: "hodleveryday.com - เว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร บทความเกี่ยวกับคริปโตเคอร์เรนซี่ Bitcoin และ Blockchain เหมาะสำหรับนักลงทุนทุกระดับ",
        width: 1920,
        height: 1080,
        type: "image/jpeg",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@hodleveryday",
    title: "hodleveryday.com เป็นเว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ",
    description: "hodleveryday.com เป็นเว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ",
    images: [
      {
        url: "http://localhost:3000/wallpaper.jpeg",
        alt: "hodleveryday.com - เว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร บทความเกี่ยวกับคริปโตเคอร์เรนซี่ Bitcoin และ Blockchain เหมาะสำหรับนักลงทุนทุกระดับ",
        width: 1920,
        height: 1080,
        type: "image/jpeg",
      }
    ]
  },
  abstract: "hodleveryday.com เป็นเว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร และบทวิเคราะห์เกี่ยวกับคริปโตเคอร์เรนซี่ เหมาะสำหรับนักลงทุนทุกระดับ ไม่ว่าจะเป็นมือใหม่หรือมืออาชีพ",
  verification: {
    google: "uEacq0IeLU8EBD7DPEeF_4xEd8LslvoJ-4omouVZSkc",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hodleveryday.com/" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
