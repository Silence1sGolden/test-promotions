import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Тестовое",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
