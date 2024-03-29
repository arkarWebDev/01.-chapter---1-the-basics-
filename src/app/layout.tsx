import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <nav className="flex items-center justify-between max-w-4xl mx-auto py-10">
            <Link href={"/"} className=" text-4xl font-bold">
              ROTT
            </Link>
            <div className=" flex items-center font-medium gap-3">
              <Link href={"/about"}>about</Link>
              <Link href={"/contact"}>contact us</Link>
              <Link href={"/events"}>events</Link>
            </div>
          </nav>
          {children}
        </section>
      </body>
    </html>
  );
}
