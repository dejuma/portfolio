import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oluwadunsin Olesin | Software Engineer & Digital Craftsman",
  description:
    "Welcome to my digital domain! Explore my portfolio, a testament to my journey as a software engineer.",
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon.png",
    shortcut: "./favicon-16x16.png",
  },
  manifest: "/public/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
