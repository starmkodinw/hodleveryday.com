import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/nav";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About - hodleveryday.com",
  description: "hodleveryday.com เป็นชุมชนที่กระตือรือร้นที่อุทิศให้กับโลกแห่งสกุลเงินดิจิทัลและเทคโนโลยีบล็อกเชน",
  keywords: "About",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hodleveryday.com/about" />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
