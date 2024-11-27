import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
export const metadata: Metadata = {
  title: "Hero Section",
  description: "Class 9 assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
