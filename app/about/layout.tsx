import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "О нас",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
