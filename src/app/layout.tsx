import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
  title: {
    default: "Your SaaS App",
    template: "%s | Your SaaS App",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
