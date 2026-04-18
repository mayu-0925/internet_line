import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const BASE_URL = "https://www.net-choice.jp";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ネットえらびナビ | インターネット回線 比較・ランキング",
    template: "%s | ネットえらびナビ",
  },
  description:
    "インターネット回線を料金・速度・エリアでわかりやすく比較。光回線・home5G・モバイルWiFiのおすすめランキングを毎月更新しています。",
  keywords: ["光回線", "インターネット回線", "比較", "ランキング", "おすすめ"],
  authors: [{ name: "ネットえらびナビ編集部" }],
  creator: "ネットえらびナビ編集部",
  publisher: "ネットえらびナビ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "ネットえらびナビ",
    title: "ネットえらびナビ | インターネット回線 比較・ランキング",
    description:
      "インターネット回線を料金・速度・エリアでわかりやすく比較。光回線・home5G・モバイルWiFiのおすすめランキングを毎月更新しています。",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "ネットえらびナビ | インターネット回線 比較・ランキング",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ネットえらびナビ | インターネット回線 比較・ランキング",
    description:
      "インターネット回線を料金・速度・エリアでわかりやすく比較。光回線・home5G・モバイルWiFiのおすすめランキングを毎月更新しています。",
    images: ["/og-default.png"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "ネットえらびナビ",
      description:
        "インターネット回線を料金・速度・エリアでわかりやすく比較するメディア",
      inLanguage: "ja",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "ネットえらびナビ編集部",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon.ico`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HW5111DPKF" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-HW5111DPKF');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
