import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jinhyeok Portfolio",
  description: "Frontend Developer 허진혁의 포트폴리오입니다.",
  metadataBase: new URL("https://jinhyeok-portfolio.netlify.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
