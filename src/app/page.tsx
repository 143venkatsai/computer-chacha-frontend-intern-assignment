import { HeroSection } from "../components/HeroSection";
import { ClientLogos } from "../components/ClientLogos";
import { AboutSection } from "../components/AboutSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientLogos />
      <AboutSection />
    </main>
  );
}
