import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunny Partners | 挑戦する事業者の次のステージを共に創る",
  description: "Web制作・販促ツール・公式LINE・AI活用・数字の見える化。全体を見渡した設計で、あなたの事業を次のステージへ。作って終わらず、伴走し続けるパートナー、Sunny Partners。",
  keywords: ["事業支援", "Web制作", "販促ツール", "公式LINE", "AI活用", "数字の見える化", "伴走型サポート"],
  openGraph: {
    title: "Sunny Partners | 挑戦する事業者の次のステージを共に創る",
    description: "Web制作・販促ツール・公式LINE・AI活用・数字の見える化。全体を見渡した設計で、あなたの事業を次のステージへ。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Partners | 挑戦する事業者の次のステージを共に創る",
    description: "Web制作・販促ツール・公式LINE・AI活用・数字の見える化。全体を見渡した設計で、あなたの事業を次のステージへ。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
