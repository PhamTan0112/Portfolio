import { AboutSecion } from "../src/components/AboutSection";
import { ContactSection } from "../src/components/ContactSection";
import { Footer } from "../src/components/Footer";
import { HeroSection } from "../src/components/HeroSection";
import { Navbar } from "../src/components/Navbar";
import { ProjectsSection } from "../src/components/ProjectsSection";
import { SkillsSection } from "../src/components/SkillsSections";
import { StarBackground } from "../src/components/StarBackground";
import { ThemeToggle } from "../src/components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle></ThemeToggle>
      {/* Background Effects  */}
      <StarBackground></StarBackground>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSecion />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
