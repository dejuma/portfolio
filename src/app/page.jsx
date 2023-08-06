import BrowserProgess from "@/components/BrowserProgress/BrowserProgess";
import { Hero } from "@/components/Hero/Hero";
import AboutContent from "@/components/About/About";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutContent />
    </div>
  );
}
