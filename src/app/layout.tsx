import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider"
import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
const fonts = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabinet Łukasz Chwalisz",
  description: "Strona internetowa gabinetu psychologicznego.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={fonts.className}>
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
