import Image from "next/image";
import HomePageDetails from "./Components/homePage/homePage";
import TechTicker from "./Components/ui/TechTicker";
import "./globals.css";
import 'aos/dist/aos.css';
import AboutMe from "./Components/aboutMeSection/aboutMe";
import Portfolio from "./Components/portfolioFolder/portfolio";
import Contacts from "./contacts/contacts";
import Footer from "./footer/footer";
import { syne } from "./lib/fonts";

export default function Home() {
  return (
    <div className={`${syne.className} bg-[var(--primary)] overflow-x-hidden`}>
      <HomePageDetails />
      <TechTicker />
      <Portfolio />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  );
}
