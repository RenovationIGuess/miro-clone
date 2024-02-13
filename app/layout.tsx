import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvextClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";

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
        <ConvextClientProvider>
          {children}
          <Toaster />
        </ConvextClientProvider>
      </body>
    </html>
  );
}
