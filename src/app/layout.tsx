import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "California Compass",
  description: "A visual field guide to California."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
