import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans_KR } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  variable: "--font-ibm-plex-sans-kr",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "YoonLog",
    template: "%s | YoonLog",
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
    url: "yoonlog.vercel.app",
    title: "YoonLog",
    description:
      "프론트엔드 개발자 박지윤의 블로그입니다. 개발 이슈나 학습 관련 글을 공유합니다.",
    siteName: "YoonLog",
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
        className={`${geistMono.variable} ${ibmPlexSansKR.variable} ${pretendard.variable} antialiased min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
