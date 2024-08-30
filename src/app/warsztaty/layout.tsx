import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Warsztaty - Gabinet Łukasz Chwalisz",
  description: "Oferta warsztatów w ramach działalności gabinetu psychologicznego",
};

export default function WorkoutLayout({
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
