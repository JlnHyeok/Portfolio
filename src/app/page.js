import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Head>
        <title>Jinhyeok Portfolio</title>
        <meta property="og:title" content="Jinhyeok Portfolio" />
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
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
