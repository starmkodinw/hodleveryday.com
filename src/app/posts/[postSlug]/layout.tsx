import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../../components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "next.js, typescript, tailwindcss",
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
        <p>Layout 1</p>
        <Nav />
      </body>
    </html>
  );
}