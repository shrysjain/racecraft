import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "@/lib/recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RaceCraft",
  description: "Simulate F1 races and manage teams, drivers, and circuits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
