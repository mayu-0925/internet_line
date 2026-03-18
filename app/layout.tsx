import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ネットえらびナビ | インターネット回線 比較・ランキング",
    template: "%s | ネットえらびナビ",
  },
  description:
    "インターネット回線を料金・速度・エリアでわかりやすく比較。光回線・home5G・モバイルWiFiのおすすめランキングを毎月更新しています。",
  keywords: ["光回線", "インターネット回線", "比較", "ランキング", "おすすめ"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ネットえらびナビ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
