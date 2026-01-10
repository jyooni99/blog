import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
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
    default: "yoon_log",
    template: "%s | yoon_log",
  },
  description:
    "프론트엔드 개발자 박지윤의 블로그입니다. 개발 이슈나 학습 관련 글을 공유합니다.",
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
    url: "yoon-dev-log.vercel.app",
    title: "yoon_log",
    description:
      "프론트엔드 개발자 박지윤의 블로그입니다. 개발 이슈나 학습 관련 글을 공유합니다.",
    siteName: "yoon_log",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko_KR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
