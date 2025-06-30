import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  SocialLinks,
} from "./components";
import dynamic from "next/dynamic";

// Import CustomScrollbar dynamically to prevent SSR issues
const CustomScrollbar = dynamic(() => import("./components/CustomScrollbar"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative z-0 bg-primary font-sans">
      <CustomScrollbar />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <SocialLinks />
      <Experience />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
