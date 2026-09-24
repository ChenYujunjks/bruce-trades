import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}
