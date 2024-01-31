import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jinhyeok Portfolio",
  description: "Frontend Developer 허진혁의 포트폴리오입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Jinhyeok Portfolio</title>
        <meta
          name="description"
          content="Frontend Developer 허진혁의 포트폴리오입니다."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://jinhyeok-portfolio.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jinhyeok Portfolio" />
        <meta
          property="og:description"
          content="Frontend Developer 허진혁의 포트폴리오입니다."
        />
        <meta
          property="og:image"
          content="https://jinhyeok-portfolio.netlify.app/images/about-image.jpeg"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="jinhyeok-portfolio.netlify.app"
        />
        <meta
          property="twitter:url"
          content="https://jinhyeok-portfolio.netlify.app/"
        />
        <meta name="twitter:title" content="Jinhyeok Portfolio" />
        <meta
          name="twitter:description"
          content="Frontend Developer 허진혁의 포트폴리오입니다."
        />
        <meta
          name="twitter:image"
          content="https://jinhyeok-portfolio.netlify.app/images/about-image.jpeg"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
