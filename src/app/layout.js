import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { BackgroundBeams } from "@/components/baground-beams";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Club, NITK",
  description: "Web Enthusiasts Club, NITK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
