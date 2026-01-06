import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "北海工務店｜リフォーム・住宅の健康診断",
  description:
    "北海道の気候に適したリフォームと住宅の健康診断。安心・安全な住まいづくりをサポートします。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {/* 共通ヘッダー */}
        <Header />

        {/* ヘッダー分の余白 */}
        <main className="pt-20">
          {children}
        </main>

        {/* 共通フッター */}
        <Footer />
      </body>
    </html>
  );
}
