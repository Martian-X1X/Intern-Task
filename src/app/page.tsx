import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Photo from "./components/Photo";
import Explore from "./components/Explore";
import Overview from "./components/Overview";
import { Feather } from "lucide-react";
import Feature from "./components/Feature";
import CardList from "./components/CardList";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <Photo/>
      <Explore/>
      <Overview/>
      <Feature/>
      <CardList/>
      
      <footer className="flex gap-6 flex-wrap items-center justify-center mt-8">
        {/* Footer content */}
      </footer>
    </div>
  );
}