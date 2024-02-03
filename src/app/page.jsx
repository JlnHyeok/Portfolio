import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Background from "./components/background/Background";
import BackAnimation from "./components/background-animation/BackAnimation";

export default function Home() {
  return (
    <>
      <BackAnimation />
      <Background />
      <main className="flex min-h-screen flex-col bg-[#121212] ">
        <Navbar />
        <div className="container mt-24 mx-auto px-6 sm:px-12 py-4 z-10">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
