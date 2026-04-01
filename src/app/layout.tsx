import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EQT Academy - Become a Six Figure Funded and Profitable Trader",
  description: "EQT Academy teaches traders to think like professionals — structure, liquidity, and precision. Built for those ready to go all in.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}