import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jinhyeok's Portfolio",
  description: "Frontend Developer 허진혁의 포트폴리오입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Jinhyeok's Portfolio</title>
        <meta property="og:title" content="Jinhyeok's Portfolio" />
        <meta
          property="og:description"
          content="Frontend Developer 허진혁의 포트폴리오입니다."
        />
        <meta
          property="og:url"
          content="https://jinhyeok-portfolio.netlify.app/"
        />
        <meta
          property="og:image"
          content="https://jinhyeok-portfolio.netlify.app/images/about-image.jpeg"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
