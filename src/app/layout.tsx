import type { Metadata } from "next";
import { lexendDeca, radley } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibrant Technology",
  description: "Cloud-Based Tech Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.variable} ${radley.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
