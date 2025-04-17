import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const fontSans = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.siteName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#2f72df",
        },
      }}
    >
      <html lang="en">
        <body className={cn(fontSans.className, "antialiased")}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
