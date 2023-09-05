import Hero from "@/components/Hero/Hero";
import AboutContent from "@/components/About/About";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <Hero />
      </div>
      <div className="flex items-center justify-center h-screen">
        <AboutContent />
      </div>
    </div>
  );
}
