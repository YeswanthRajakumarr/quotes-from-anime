import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/common/theme-provider"


export const metadata: Metadata = {
  title: "Quotes from Anime",
  description: "Daily Motivational quotes from your favorite anime character ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className="w-full h-full max-w-3xl px-4 pt-4 mx-auto lg:px-20 md:pt-10 ">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
