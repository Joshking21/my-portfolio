import Image from "next/image";
import HomePageDetails from "./Components/homePage/homePage";
import TechTicker from "./Components/ui/TechTicker";
import "./globals.css";
import 'aos/dist/aos.css';
import AboutMe from "./Components/aboutMeSection/aboutMe";
import Skills from "./Components/skillsPage/skillsPage";
import Portfolio from "./Components/portfolioFolder/portfolio";
import Contacts from "./contacts/contacts";
import Footer from "./footer/footer";
import { Syne } from "next/font/google";

const syne = Syne({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${syne.className} bg-[var(--primary)] overflow-x-hidden`}>
      <HomePageDetails />
      <TechTicker />
      <Portfolio />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  );
}
