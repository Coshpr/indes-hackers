import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

import NavBar from "@/components/navbar"
import Footer from "@/components/footer"


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "indes-hackers",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true} >
        <NavBar className="global_screen_setting"></NavBar>
        <main> {children} </main>
        <Footer className="global_screen_setting"></Footer>
      </body>
    </html>
  );
}
