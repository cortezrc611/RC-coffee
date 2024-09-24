import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/hero-section/landingpage";
import About from "./components/about/about"
export default function Home() {
  return (
    <>
   <Navbar />
   <LandingPage />
   <About />
   </>
  );
}
