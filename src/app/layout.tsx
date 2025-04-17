import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.siteName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
