import dynamic from "next/dynamic";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  SocialLinks,
  BlogSection,
} from "./components";

// Lazy load StarsCanvas
const StarsCanvas = dynamic(() => import("./components/canvas/Stars"), {
  ssr: false,
  loading: () => <></>, // optional placeholder
});

export default function Home() {
  return (
    <div className="relative z-0 bg-primary font-sans">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <SocialLinks />
      <Experience />
      <Works />
      <BlogSection />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
