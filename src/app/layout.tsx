import type { Metadata } from "next";
import {DM_Mono} from "next/font/google";
import "./globals.css";

const DM_MonoFont = DM_Mono({weight: ['300', '400', '500'], subsets: ['latin']});

export const metadata: Metadata = {
  title: "Sisu",
  description: "Sisu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DM_MonoFont.className}>{children}</body>
    </html>
  );
}
