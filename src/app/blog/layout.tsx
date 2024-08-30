import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Blog - Gabinet Łukasz Chwalisz",
  description: "Oferta warsztatów w ramach działalności gabinetu psychologicznego",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}