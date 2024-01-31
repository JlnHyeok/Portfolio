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
          content="https://opengraph.b-cdn.net/production/documents/e950539f-a16f-44a0-9846-99fc28880aa3.jpg?token=PiXT_40Jg38zF7mQyI4-_ZfNLyRHuXn0irl4iJ5uLO4&height=512&width=512&expires=33242710838"
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
          content="https://opengraph.b-cdn.net/production/documents/e950539f-a16f-44a0-9846-99fc28880aa3.jpg?token=PiXT_40Jg38zF7mQyI4-_ZfNLyRHuXn0irl4iJ5uLO4&height=512&width=512&expires=33242710838"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
