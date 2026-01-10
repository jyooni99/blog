import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "yoon-log",
    template: "%s | yoon-log",
  },
  description: "FrontEnd Developer Yoon's Blog. 개발 이슈나 학습 관련 글을 공유합니다.",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "FrontEnd",
    "Blog",
    "프론트엔드",
    "웹개발",
    "기술 블로그",
    "개발자",
  ],
  creator: "jyooni99",
  publisher: "jyooni99",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://yoon-log.vercel.app",
    title: "yoon-log",
    description: "FrontEnd Developer Yoon's Blog. 개발 이슈나 학습 관련 글을 공유합니다.",
    siteName: "yoon-log",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
