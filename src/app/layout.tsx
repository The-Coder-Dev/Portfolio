import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/web/Navbar";
import LenisProvider from "@/components/web/LenisProvider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


const geistMono = Geist_Mono({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Sharma - Curated Portfolio",
  description: "My new portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-background">
        <LenisProvider>
        <Navbar />
        {children}
        </LenisProvider>
      </body>
    </html>
  );

}
