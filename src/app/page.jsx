import BrowserProgess from "@/components/BrowserProgress/BrowserProgess";
import { Hero } from "@/components/Hero/Hero";
import AboutContent from "@/components/About/About";
import Image from "next/image";
import Resume1 from "@/components/Resume/Resume1";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutContent />
      <Resume1 />
    </div>
  );
}
