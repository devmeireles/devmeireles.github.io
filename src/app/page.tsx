import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <Hero />
      <Timeline />
      <TechStack />
      <Footer />
    </div>
  );
}
