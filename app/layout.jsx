import localFont from "next/font/local";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const noto = Noto_Sans({ weight: ["100", "300", "500", "700", "900"], subsets: ["latin"], preload: true, variable: "--font-noto-sans" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${noto.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}